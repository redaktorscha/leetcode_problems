class MinStack {
  constructor() {
    this.min = [];
    this.ordered = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.ordered.push(val);
    if (this.min.length === 0) {
      this.min.push(val);
      return;
    }

    this.min.push(Math.min(val, this.min[this.min.length - 1]));
  }

  /**
   * @return {void}
   */
  pop() {
    this.ordered.pop();
    this.min.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.ordered[this.ordered.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.min[this.min.length - 1];
  }
}
