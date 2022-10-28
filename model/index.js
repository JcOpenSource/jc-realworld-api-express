// 组织数据模型模块
// https://mongoosejs.com/

/******************** 初始化连接数据库 *********************/
const mongoose = require('mongoose');
const {dbUrl} = require('../config/config.default')

// 连接 MongoDB 数据库
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection

// 当连接失败的时候
db.on('error', (err) => {
  console.log('MongoDB 数据库连接失败', err);
})

// 当连接成功的时候
db.once('open', function(){
  console.log('MongoDB 数据库连接成功')
})

/** 示例：
 * 
 * // 创建数据模型
 * const Cat = mongoose.model('Cat', { name: String });
 * // 创建数据
 * const kitty = new Cat({ name: 'Zildjian' });
 * // 保存数据
 * kitty.save().then(() => console.log('meow'));
 * 
*/

// 组织导出模型类
module.exports = {
  User: mongoose.model('User', require('./user')),
  Article: mongoose.model('Article', require('./article'))
}
