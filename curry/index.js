// study from 30 seconds of code

const curry = (func, arity = func.length, ...args) =>
  arity <= args.length ? func(...args) : curry.bind(null, func, arity, ...args);

module.exports = curry;
