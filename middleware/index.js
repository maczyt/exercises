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
