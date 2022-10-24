const express = require('express')

const router = express.Router()

// 获取指定用户资料
router.get('/:username', async(req, res, next) => {
  try {
    // 处理请求
    res.send('get /profiles/:username')
  } catch (err) {
    next(errr)
  }
})

// 关注用户
router.post('/:username/follow', async(req, res, next) => {
  try {
    // 处理请求
    res.send('post /profiles/:username/follow')
  } catch (err) {
    next(errr)
  }
})

// 取消关注用户
router.delete('/:username', async(req, res, next) => {
  try {
    // 处理请求
    res.send('delete /profiles/:username')
  } catch (err) {
    next(errr)
  }
})


module.exports = router