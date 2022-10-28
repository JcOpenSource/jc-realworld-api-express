const jwt = require('jsonwebtoken')
// const { jwtSecret } = require('../config/config.default')
const { promisify } = require('util') // 将最后一次参数时回调函数的方法转换成promise

exports.sign = promisify(jwt.sign)

exports.verify = promisify(jwt.verify)

// 不验证做数据解析
exports.decode = promisify(jwt.decode)

/******************************* tst 示例 *****************************/
// // 生成jwt
const token = jwt.sign({
  foo: 'bar'
}, 'lijunchengjjy', (err, token) => {
  if(err){
    return console.log('生成 token 失败')
  }
  console.log('token', token)
})

// console.log(token)

// // 验证 jwt
const str = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2NjY5NTY1NzB9.elS_lEQJhQoPh6URp0fsOOmblFCOC-r6mK3n5kxhoQE'
const ret = jwt.verify(
  str,
  'lijunchengjjy',
  (err, ret)=>{
    if (err) {
      return console.log('token 认证失败')
    }
    console.log(ret)
  }
)  

