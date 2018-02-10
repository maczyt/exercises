/**
 * 这里是暴力拍平数组
 * 提高实现： 可以配置拍平depth
 * @param {*} arr
 */
const flatten = arr =>
  arr.reduce(
    (r, item) =>
      Array.isArray(item) ? r.concat(flatten(item)) : r.concat(item),
    []
  );

module.exports = flatten;
