const crypto = require('crypto')

// 获取 crypto 支持的散列算法
console.log(crypto.getHashes())

// 'md5' 来自于 crypto.getHashes()
const ret = crypto.createHash('md5')
  .update('hello ljc') // 明文
  .digest('hex') // hex 十进制

console.log(ret) // 密文  不能通过密文推断出明文

// md5 相同的字符串加密出来的结果相同
// md5 的破解方法时比对 暴力破解 字典
// 混合字符 md5二次加密

module.exports = str => {
  return crypto.createHash('md5')
  .update('ljc' + str)
  .digest('hex')
}
