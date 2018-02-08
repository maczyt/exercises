const flatten = arr =>
  arr.reduce(
    (r, item) =>
      Array.isArray(item) ? r.concat(flatten(item)) : r.concat(item),
    []
  );

module.exports = flatten;
