var MinStack = function () {
  this.minStack = [];
  this.orderedStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.orderedStack.push(val);
  const prevMin = this.minStack[this.minStack.length - 1];
  this.minStack.push(val);

  if (val > prevMin) {
    let i = this.minStack.length - 1;

    while (i > 0 && this.minStack[i - 1] < val) {
      this.minStack[i] = this.minStack[i - 1];
      i -= 1;
    }

    this.minStack[i] = val;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const deletedVal = this.orderedStack.pop();
  let delIndex = -1;
  for (let i = this.minStack.length - 1; i >= 0; i -= 1) {
    if (this.minStack[i] === deletedVal && delIndex === -1) {
      delIndex = i;
    }
  }
  if (delIndex !== -1) {
    this.minStack.splice(delIndex, 1);
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.orderedStack[this.orderedStack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};
