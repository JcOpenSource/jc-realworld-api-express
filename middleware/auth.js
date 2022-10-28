/**
 * 认证用户身份的中间件
*/
const { verify } = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')
const { User } = require('../model') 

module.exports = async (req, res, next) => {
  let token = req.headers['authorization']
  token = token 
    ? token.split('Bearer ')[1]
    : null

  if(!token){
    return res.status(401).end()
  }

  try { // 返回的promise，使用try/catch接受异常
    const decodedToken= await verify(token, jwtSecret)
    console.log('decodedToken', decodedToken)

    req.user = await User.findById(decodedToken.userId)

    next()
  } catch (err) {
    // 认证失败
    return res.status(401).end()
  }

  // 整体流程
  // 从请求头获取 token 数据
  // 验证 token 是否有效
  // 无效 -> 响应 401 状态码
  // 有效 -> 把用户信息读取出来挂载到 req 请求对象上 继续往后执行
}
