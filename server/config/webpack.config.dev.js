const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const utils = require('../utils')

module.exports = {
    entry: {
        admin: [
            'webpack-hot-middleware/client?reload=true',
            `${utils.rootPath}frontEnd/main.ts`
        ]
    },
    output: {
        path: `${utils.rootPath}dist/dev`,
        filename: '[name].js',
        publicPath: `${utils.rootPath}dist/dev`
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${utils.rootPath}frontEnd/index.tmp.html`,
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
}
