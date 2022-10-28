// 用户登录
const { User } = require('../model')
const jwt = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')

// 用户登录
exports.login = async(req, res, next) => {
  try {
    // JSON.parse('sfsadfsda')
    // 处理请求

    // 1. 数据验证
    // 2. 生成token
    const user = req.sqluser.toJSON()
    const token = await jwt.sign({
      userId: user._id
    }, jwtSecret, {
      expiresIn: 60 * 60 * 24
    }) // 1天 过期

    // 3. 发送成功响应(包含token的用户信息)
    // res.send('get /users/login')
    delete user.password  // 删除密码信息
    res.status(200).json({
      ...user,
      token
    })
  } catch (err) {
    next(err)
  }
}

// 用户注册
exports.register = async(req, res, next) => {
  try {
    // 处理请求
    // 1. 获取请求体数据
    console.log(req.body)
    // 2. 数据验证
    // 2.1 基本数据验证
    
    // 2.2 业务数据验证

    // 3. 验证通过，将数据保存到数据库
    // 3.1 构造user对象
    let user = new User(req.body.user)

    // 3.2 保存user到数据库
    await user.save()

    // 将mongo对象转换成普通json对象
    user = user.toJSON()
    delete user.password

    // 4. 发送成功响应
    // 添加成功之后将注册信息返回给客户端
    res.status(201).json({
      user
    })
    // res.send('get /users 用户注册')
  } catch (err) {
    next(err)
  }
}

// 获取当前登录用户
exports.getCurrentUser = async(req, res, next) => {
  try {
    // 处理请求
    console.log(req.headers) // 获取头信息

    res.status(200).json({
      user: req.user
    })

    // 将认证模块封装成中间件
    // res.send('getCurrentUser 获取当前登录用户')
  } catch (err) {
    next(err)
  }
}

// 更新当前登录用户
exports.updateCurrentUser = async(req, res, next) => {
  try {
    // 处理请求
    res.send('updateCurrentUser 更新当前登录用户')
  } catch (err) {
    next(err)
  }
} 
