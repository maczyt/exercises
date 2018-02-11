/**
 *
 * @param {*} arr
 * @param {*} key
 */

const binarySearch = (arr, key, start = 0, end = arr.length - 1) => {
  const index = Math.floor((start + end) / 2);
  const middle = arr[index];
  if (middle === key) {
    return index;
  }
  if (index === start || index === end) {
    return -1;
  }
  if (middle < key) {
    return binarySearch(arr, key, index + 1, end);
  } else {
    return binarySearch(arr, key, start, index - 1);
  }
};
module.exports = binarySearch;
