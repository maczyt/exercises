const chainAsync = fns => {
  let cur = 0;
  const next = (...args) => fns[cur++](next, ...args.slice(1));
  next();
};

module.exports = {
  sequence: function(fns) {
    return function(fn) {
      chainAsync(fns.concat(fn));
    };
  }
};
