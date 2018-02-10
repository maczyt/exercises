/**
 * 翻转二叉树
 * @param {*} node
 */
const invertTree = node => {
  const left = node.left;
  const right = node.right;
  if (!!left) {
    node.right = left;
    invertTree(left);
  } else {
    /**
     * 如果左树为空
     * 翻转后，右树应该为空
     */
    delete node.right;
  }
  if (!!right) {
    node.left = right;
    invertTree(right);
  } else {
    /**
     * 同理
     */
    delete node.left;
  }
};

module.exports = invertTree;
