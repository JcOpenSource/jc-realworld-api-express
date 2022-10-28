// 用户相关数据模型
const mongoose = require('mongoose')
const md5 = require('../util/md5')

const userSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String,
    required: true // 必填字段
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    set: value => md5(value), // 钩子函数 当你要给password进行赋值的时候 进行md5(value)操作
    select: false  // 查询数据的时候不会带出来（显示出来）
  },
  bio: {
    type: String,
    default: null
  },
  image: { // 用户头像 存入图片地址
    type: String,
    default: null
  }
})
module.exports = userSchema