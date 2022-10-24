const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router') // 默认是index.js文件

const app = express()

// 配置解析表单请求体：application/json
app.use(express.json())
// 解析表单请求体：application/x-www-form-urlencoded
app.use(express.urlencoded())

// dev 开发 配置日志输出模块
app.use(morgan('dev'))

// 跨域
app.use(cors())

// 通过环境变量读取端口号
// 环境变量里面有读取环境变量里面的，没有则读物3000
const PORT = process.env.PORT || 3000

// 挂载路由 '/api' 设置公共开头
app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})

