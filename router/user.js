const express = require('express')
const userCtrl = require('../controller/user')
const userValidator = require('../validator/user')
const auth = require('../middleware/auth')  // 中间件：认证用户

// const { body, validationResult } = require('express-validator');
// const { User } = require('../model')  // 通过model统一导出所有数据模型

const router = express.Router()

// 用户登录
router.post('/users/login', userValidator.login, userCtrl.login)

// 将验证方法加载路由里面
// 用户注册
// router.post('/users', [ // 1.配置验证规则
//   // 验证中间件
//   body('user.username')
//     .notEmpty().withMessage('用户名不能为空') // 定制请求消息
//     .custom(async username => {
//       const user = await User.findOne({ username })
//       console.log(user)
//       if (user) {
//         return Promise.reject('用户名已存在')
//       }
//     }),
//   body('user.password').notEmpty().withMessage('密码不能为空'),//验证请求体里面的数据
//   body('user.email')
//     .notEmpty().withMessage('邮箱不能为空')
//     .isEmail().withMessage('邮箱格式不正确')
//     .bail() // 前面验证失败就不用往后走，前面全部验证成功才往后后
//     .custom(async value => {
//       const user = await User.findOne({ email: value })
//       if (user) {
//         return Promise.reject('邮箱已存在')
//       }
//     }) // 自定义验证方法
// ], (req, res, next) => { // 2.判断验证结果
//   const errors = validationResult(req);

//   // 如果检测到错误信息
//   if (!errors.isEmpty()) {
//     // 用json的方式将错误信息返回
//     return res.status(400).json({ errors: errors.array() });
//   }

//   next() // 验证同放行

// }, userCtrl.register) // 3.通过验证，执行具体的控制器处理

router.post('/users', userValidator.register, userCtrl.register)

// 获取当前登录用户
router.get('/user', auth, userCtrl.getCurrentUser)

// 更新当前登录用户 
router.put('/user', auth, userCtrl.updateCurrentUser)

module.exports = router
