// 用户登录
exports.login = async(req, res, next) => {
  try {
    // 处理请求
    res.send('get /users/login')
  } catch (err) {
    next(errr)
  }
}

// 用户注册
exports.register = async(req, res, next) => {
  try {
    // 处理请求
    res.send('get /users 用户注册')
  } catch (err) {
    next(errr)
  }
}

// 获取当前登录用户
exports.getCurrentUser = async(req, res, next) => {
  try {
    // 处理请求
    res.send('getCurrentUser 获取当前登录用户')
  } catch (err) {
    next(errr)
  }
}

// 更新当前登录用户
exports.updateCurrentUser = async(req, res, next) => {
  try {
    // 处理请求
    res.send('updateCurrentUser 更新当前登录用户')
  } catch (err) {
    next(errr)
  }
} 
