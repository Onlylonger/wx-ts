const express = require('express')
const path = require('path')
const config = require('./config')

const apiRouter = require('./router/api')

const app = express()

// node中间件

app.use(express.static(path.join(__dirname, './public')))

app.use('/api', apiRouter)

app.listen(config.port, config.host, () => {
    console.log(`本地服务器开启; 地址${config.host}:${config.port}`)
})
