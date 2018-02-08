module.exports = (fn, time) =>
  function(...args) {
    clearTimeout(fn.timer);
    fn.timer = setTimeout(() => {
      fn.apply(this, args);
    }, time);
  };
