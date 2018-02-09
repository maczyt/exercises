const invertTree = node => {
  const left = node.left;
  const right = node.right;
  if (!!left) {
    node.right = left;
    invertTree(left);
  } else {
    delete node.right;
  }
  if (!!right) {
    node.left = right;
    invertTree(right);
  } else {
    delete node.left;
  }
};

module.exports = invertTree;
