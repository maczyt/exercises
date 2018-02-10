const chainAsync = fns => {
  let cur = 0;
  /**
   * 构成一个event loop(需要执行的函数数组)
   * 使用next来遍历这些函数，把next作为cb传给函数的形参cb，并依次传入args
   * 形成了一个函数调用链
   * @param {*} args
   */
  const next = (...args) => fns[cur++](next, ...args.slice(1));
  next();
};

const promiseify = func => (...args) =>
  new Promise((resolve, reject) => {
    func(...args, (err, result) => (err ? reject(err) : resolve(result)));
  });

/**
 * 参考Promise.all
 * @param {*} fns
 */
const parallel = fns => cb => {
  Promise.all(fns.map(fn => promiseify(fn))).then(p => {
    Promise.all(p.map(f => f())).then(result => {
      cb(null, result);
    });
  });
};

/**
 * 参考Promise.race
 * @param {*} fns
 */
const race = fns => cb => {
  Promise.all(fns.map(fn => promiseify(fn))).then(p => {
    Promise.race(p.map(f => f())).then(result => {
      cb(null, result);
    });
  });
};

module.exports = {
  sequence: function(fns) {
    return function(fn) {
      chainAsync(fns.concat(fn));
    };
  },
  parallel,
  race
};
