const CycleStatistics = require('./cycle-statistics.js')

class Duration extends CycleStatistics {
  constructor(value) {
    super(value)
    this._points = []
  }
  push(value) {
    this._points.push(value)
    if (this._points.length < 2) {
      this._value = 0
    } else {
      this._value = this._points[this._points.length - 1] - this._points[0]
    }
    return this
  }
  step() {
    this.push(Date.now())
    if (this._points.length < 2) {
      return 0
    }
    return this._points[this._points.length - 1] -
      this._points[this._points.length - 2]
  }
  restart() {
    super.restart()
    this._value = 0
    this._points = []
  }
  *[Symbol.iterator]() {
    if (this._points.length < 2) {
      return
    }
    for (var i = 1, len = this._points.length; i < len; i++) {
      yield this._points[i] -
            this._points[i - 1]
    }
  }
}

module.exports = Duration
