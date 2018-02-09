const map = (arr, iterator, context) => {
  const mapRes = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    mapRes.push(iterator.call(context || this, arr[i], i, arr));
  }
  return mapRes;
};

module.exports = map;
