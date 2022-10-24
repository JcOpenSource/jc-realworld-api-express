const express = require('express')

const router = express.Router()

// 挂载路由
router.get('/', (req, res)=>{
  res.send('get Hello World')
})

router.post('/', (req, res)=>{
  res.send('post Hello World')
})

// 用户相关路由
router.use(require('./user'))

// 用户资料相关路由
// router.use(require('./profile'))
router.use('/profiles', require('./profile'))

// 文章相关路由
router.use('/articles', require('./article'))

// 标签相关路由
router.use('/tags', require('./tag'))

module.exports = router