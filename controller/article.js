const { Article } = require("../model")

exports.showIndex = async (req, res, next) => {
  try {
    const page = req.query.page
      ? Number.parseInt(req.query.page)
      : 1
    const pageSize = 10

    const articles = await Article.find()
      .skip((page - 1) * pageSize) // 跳过多少
      .limit(pageSize) // 取多少

    const articlesCount = await Article.count()

    res.render('index', {
      articles,
      page,
      pageSize,
      articlesCount,
      totalPage: Math.ceil(articlesCount / pageSize)
    })
  } catch (err) {
    next(err)
  }
}

exports.showEditor = async (req, res, next) => {
  try {
    res.render('editor')
  } catch (err) {
    next(err)
  }
}

exports.showArticle = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.articleId).populate('author')
    res.render('article', {
      article
    })
  } catch (err) {
    next(err)
  }
}

// 获取文章列表
exports.getArticles = async(req, res, next) => {
  try {
  } catch (err) {
    next(err)
  }
} 

// 获取用户关注的作者文章列表
exports.getFeedArticles = async(req, res, next) => {
  try {
  } catch (err) {
    next(err)
  }
} 

// 获取文章
exports.getArticle = async(req, res, next) => {
  try {
  } catch (err) {
    next(err)
  }
} 

// 创建文章
exports.createArticle = async(req, res, next) => {
  try {
    res.send('createArticle')
  } catch (err) {
    next(err)
  }
} 

// 更新文章
exports.updateArticle = async(req, res, next) => {
  try {
  } catch (err) {
    next(err)
  }
} 

// 删除文章
exports.deleteArticle = async(req, res, next) => {
  try {
  } catch (err) {
    next(err)
  }
} 

// 添加文章评论
exports.createArticleComment = async(req, res, next) => {
  try {
  } catch (err) {
    next(err)
  }
} 

// 获取文章评论列表
exports.getArticleComments = async(req, res, next) => {
  try {
  } catch (err) {
    next(err)
  }
} 

// 删除文章评论
exports.deleteArticleComment = async(req, res, next) => {
  try {
  } catch (err) {
    next(err)
  }
} 
