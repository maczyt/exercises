const once = func => {
  let excuted = false;
  let result = null;
  return function(...args) {
    if (!excuted) {
      excuted = true;
      result = func.apply(this, args);
    }
    return result;
  };
};

module.exports = once;
