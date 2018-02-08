const chainAsync = fns => {
  let cur = 0;
  const next = (...args) => fns[cur++](next, ...args.slice(1));
  next();
};

const promiseify = func => (...args) =>
  new Promise((resolve, reject) => {
    func(...args, (err, result) => (err ? reject(err) : resolve(result)));
  });

const parallel = fns => cb => {
  Promise.all(fns.map(fn => promiseify(fn))).then(p => {
    Promise.all(p.map(f => f())).then(result => {
      cb(null, result);
    });
  });
};

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
