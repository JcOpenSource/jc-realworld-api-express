const express = require('express')

const router = express.Router()

// 获取文章列表
router.get('/', async(req, res, next) => {
  try {
    // 处理请求
    res.send('get /')
  } catch (err) {
    next(errr)
  }
})

// 获取用户关注的作者文章列表
router.get('/feed', async(req, res, next) => {
  try {
    // 处理请求
    res.send('get /feed')
  } catch (err) {
    next(errr)
  }
})

// 获取文章
router.get('/:slug', async(req, res, next) => {
  try {
    // 处理请求
    res.send('获取文章')
  } catch (err) {
    next(errr)
  }
})

module.exports = router