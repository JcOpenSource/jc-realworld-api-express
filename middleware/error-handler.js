const util = require('util')

// 仅正对开发环境输出 不对生产输出
module.exports = () => {
  return (err, req, res, next) => {
    // err 原型上本身的成员
    console.log(err);

    // json 只能序列化对象本身的数据成员
    // util.format(err) 将err转换成字符串
    res.status(500).json({
      error: util.format(err)
      // err: err
    })
  }
}
