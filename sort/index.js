/**
 * 快排
 */

const sort = arr => {
  const left = [];
  const right = [];
  const middle = Math.floor(arr.length / 2);
  if (arr.length <= 1) return arr;

  arr.forEach((item, index) => {
    if (index !== middle) {
      if (item <= arr[middle]) {
        left.push(item);
      } else {
        right.push(item);
      }
    }
  });
  return sort(left).concat(arr[middle], sort(right));
};

module.exports = sort;
