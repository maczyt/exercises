/**
 * 跟memoize实现不同的是,不管参数变不变，始终只执行一次
 * 如果每次需要传入不同的参数，建议使用memoize
 * @param {*} func
 */
const once = func => {
  let excuted = false;
  let result = null;
  return function(...args) {
    if (!excuted) {
      excuted = true;
      result = func.apply(this, args);
    }
    return result;
  };
};

module.exports = once;
