const express = require('express');
const path = require('path')
const serverConfig = require('./serverConfig')

const app = express();

// node中间件

app.use(express.static(path.join(__dirname, './public')));

app.listen(serverConfig.port, serverConfig.host, () => {
  console.log(`本地服务器开启; 地址${serverConfig.host}:${serverConfig.port}`)
})