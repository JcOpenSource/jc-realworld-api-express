/**
 * user模块验证相关
*/
const { body, validationResult } = require('express-validator');
const validate = require('../middleware/validate')
const { User } = require('../model')  // 通过model统一导出所有数据模型
const md5 = require('../util/md5')

// 注册
exports.register = validate([
  body('user.username')
    .notEmpty().withMessage('用户名不能为空') // 定制请求消息
    .custom(async username => {
      const user = await User.findOne({ username })
      console.log(user)
      if (user) {
        return Promise.reject('用户名已存在')
      }
    }),
  body('user.password').notEmpty().withMessage('密码不能为空'),//验证请求体里面的数据
  body('user.email')
    .notEmpty().withMessage('邮箱不能为空')
    .isEmail().withMessage('邮箱格式不正确')
    .bail() // 前面验证失败就不用往后走，前面全部验证成功才往后后
    .custom(async value => {
      const user = await User.findOne({ email: value })
      if (user) {
        return Promise.reject('邮箱已存在')
      }
    }) // 自定义验证方法
])

// 登录
exports.login = [  // 多个中间件 中间按照顺序校验，上一个不同则终止
  validate([
    body('user.email').notEmpty().withMessage('邮箱不能为空'),
    body('user.password').notEmpty().withMessage('密码不能为空')
  ]),
  validate([ // 验证用户是否存在
    // 通过解构的方式拿到用户的请求对象req
    body('user.email').custom(async (email, { req }) => { // 所有中间件共享一个request 和 response对象

      const user = await User.findOne({ email })
        .select(['email', 'username', 'bio', 'image', 'password'])
        // .select('password') // 此时返回的字段里面只包含password
      // 显示告诉需要password字段
      

      console.log(user)
      if (!user) {
        return Promise.reject('用户不存在')
      }
      
      // 将数据挂载到请求对象中，后续的中间件也可以使用
      req.sqluser = user 
    })
  ]),
  validate([ // 校验密码和数据库的密码是否一致
    body('user.password').custom(async (password, { req }) => {
      console.log(req.sqluser.password)
      if(md5(password) !== req.sqluser.password){
        return Promise.reject('密码错误')
      }
    })
  ])
]