const throttle = (func, delay) => {
  let first = true;
  let last = +new Date();
  return function(...args) {
    /**
     * 如果是第一次直接执行
     */
    if (first) {
      func.apply(this, args);
      first = false;
    } else {
      const curr = +new Date();
      /**
       * 保证每次delay时间内都会执行一次 (与debounce主要的区别)
       */
      if (curr - last > delay) {
        func.apply(this, args);
        last = curr;
      } else {
        /**
         * 在一个delay时间内，不管调用多少次都只执行一次
         */
        clearTimeout(func.timer);
        func.timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      }
    }
  };
};

module.exports = throttle;
