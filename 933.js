class RecentCounter {
  constructor() {
    this.low = -3000;
    this.upper = 0;
    this.MAX = 3000;
    this.pings = [];
  }

  /**
   * @param {number} t
   * @return {number}
   */
  ping(t) {
    this.upper = t;
    this.low = t - this.MAX;
    this.pings.push(t);
    while (this.low > this.pings[0]) {
      this.pings.shift();
    }

    return this.pings.length;
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

const counter = new RecentCounter();
counter.ping(642);
counter.ping(1849);
counter.ping(4921);
counter.ping(5936);
counter.ping(5957);
