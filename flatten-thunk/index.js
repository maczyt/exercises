/**
 * event loop的巧妙简易实现
 * @param {*} func
 */

const flattenThunk = func => fn => {
  const next = (err, result) =>
    typeof result === "function" ? result(next) : fn(err, result);
  func(next);
};

module.exports = flattenThunk;
