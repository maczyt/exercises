const flattenThunk = func => fn => {
  const next = (err, result) =>
    typeof result === "function" ? result(next) : fn(err, result);
  func(next);
};

module.exports = flattenThunk;
