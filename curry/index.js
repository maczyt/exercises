// study from 30 seconds of code

/**
 * 很巧妙的解法
 * 把函数所需要的arg bind到下一个函数中的args
 * @param {*} func
 * @param {*} arity
 * @param {*} args
 */
const curry = (func, arity = func.length, ...args) =>
  arity <= args.length ? func(...args) : curry.bind(null, func, arity, ...args);

module.exports = curry;
