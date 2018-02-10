/**
 * 如果在time时间内调用多次，将会导致不止time的时间后只会执行最后一次调用
 * @param {*} fn
 * @param {*} time
 */
module.exports = (fn, time) =>
  function(...args) {
    clearTimeout(fn.timer);
    fn.timer = setTimeout(() => {
      fn.apply(this, args);
    }, time);
  };
