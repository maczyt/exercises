const memoize = func => {
  const resultMap = new Map();
  return (...args) => {
    let result = resultMap.get(JSON.stringify(args));
    if (result) {
      return result;
    }
    result = func(...args);
    resultMap.set(JSON.stringify(args), result);
    return result;
  };
};

module.exports = memoize;
