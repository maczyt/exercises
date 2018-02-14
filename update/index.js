/**
 * immutablity
 * @param {*} state
 * @param {*} command
 */
const update = (state, command) => {
  const cmds = Object.keys(command);
  const len = cmds.length;
  let i = 0;
  for (; i < len; i++) {
    const cmd = cmds[i];
    /**
     * 允许修改Object原型链上的property
     * so... !(cmd in Object)
     */
    if (cmd in commands && !(cmd in Object)) {
      return commands[cmd](state, command[cmd]);
    }
    try {
      const value = command[cmd];
      const newState = Array.isArray(state)
        ? [].concat(state)
        : Object.assign({}, state);
      newState[cmd] = update(state[cmd], value);
      return newState;
    } catch (e) {}
  }
};

/**
 * commands helper
 * $push/$unshift/$splice/$set/$merge/$apply
 */

/**
 * {$push: array} push() all the items in array on the target.
 */
function push(target, source) {
  return target.concat(source);
}

/**
 * {$splice: array of arrays} for each item in arrays call splice() on the target with the parameters provided by the item.
 * @param {*} target
 * @param {*} source
 */
function splice(target, source) {
  const newTarget = target.slice();
  [].splice.apply(newTarget, source[0]);
  return newTarget;
}

/**
 * {$apply: function} passes in the current value to the function and updates it with the new returned value
 * @param {*} target
 * @param {*} fn
 */
function apply(target, fn) {
  return fn(target);
}

/**
 * {$set: any} replace the target entirely.
 * @param {*} target
 * @param {*} value
 */
function set(target, value) {
  return value;
}

/**
 * {$merge: object} merge the keys of object with the target.
 * @param {*} target
 * @param {*} source
 */
function merge(target, source) {
  return Object.assign({}, target, source);
}

/**
 * {$unshift: array} unshift() all the items in array on the target.
 * @param {*} target
 * @param {*} source
 */
function unshift(target, source) {
  return source.concat(target);
}

const commands = {
  $push: push,
  $splice: splice,
  $apply: apply,
  $set: set,
  $merge: merge,
  $unshift: unshift
};

module.exports = update;
