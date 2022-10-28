const { validationResult, ValidationChain } = require('express-validator');

// parallel processing 并行化处理 拿到所有验证条件的结果
module.exports = validations => {
  return async (req, res, next) => {
    // 等待验证结果
    await Promise.all(validations.map(validation => validation.run(req)));

    // 获取验证结果
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    // 验证失败
    res.status(400).json({ errors: errors.array() });
  };
};

// exports.isValidObjectId = (location, fields) => {
//   return buildCheckFunction(location)(fields).custom(async value => {
//     if (!isValidObjectId(value)) {
//       return Promise.reject('ID 不是一个有效的 ObjectID')
//     }
//   })
// }