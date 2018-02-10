/**
 * 有记忆的执行函数
 * 由于每次调用的参数可能不一致，所以需要存储对象的参数
 * 使用了es6的Map来存储
 *
 * related： once
 * @param {*} func
 */
const memoize = func => {
  const resultMap = new Map();
  return (...args) => {
    let result = resultMap.get(JSON.stringify(args));
    if (result) {
      return result;
    }
    result = func(...args);
    resultMap.set(JSON.stringify(args), result);
    return result;
  };
};

module.exports = memoize;
