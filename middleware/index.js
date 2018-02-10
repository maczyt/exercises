/**
 * 又是event loop的实现
 * 关键： context的设置
 * 需要设置context，所以不能使用箭头函数
 */
class Middleware {
  constructor() {
    this.$funcs = [];
    this.$funcIndex = 0;
  }
  use(func) {
    this.$funcs.push(func);
  }
  go(func) {
    this.$funcs.push(func);
    this._next();
  }
  _next() {
    return this.$funcs[this.$funcIndex++].call(this, this._next.bind(this));
  }
}

module.exports = Middleware;
