const express = require('express')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const utils = require('./utils')

// 动态加载 webpack 配置
const webpackConfig = require(`./config/webpack.config.${process.env.NODE_ENV}`)

// node 监听配置
const config = require('./config')

const apiRouter = require('./router/api')

const app = express()

// 优先静态资源目录
app.use(express.static(`${utils}public`))

// 其次node api接口
app.use('/api', apiRouter)

if (process.env.NODE_ENV === 'dev') {
    const compiler = webpack(webpackConfig)
    const middleware = webpackMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        contentBase: 'src',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    })
    app.use(middleware)
    app.use(webpackHotMiddleware(compiler))
    app.get('*', function response(req, res) {
        res.write(
            middleware.fileSystem.readFileSync(
                `${utils.rootPath}dist/dev/index.html`
            )
        )
        res.end()
    })
} else if (process.env.NODE_ENV === 'sit') {
    app.get('*', function response(req, res) {
        res.sendFile(`${utils.rootPath}dist/sit/index.html`)
    })
} else if (process.env.NODE_ENV === 'pro') {
    app.get('*', function response(req, res) {
        res.sendFile(`${utils.rootPath}dist/pro/index.html`)
    })
} else {
    throw new Error('不存在 NODE_ENV 环境变量')
}

app.listen(config.port, config.host, () => {
    console.log(`本地服务器开启; 地址${config.host}:${config.port}`)
})
