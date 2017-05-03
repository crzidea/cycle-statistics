const CycleStatistics = require('./cycle-statistics.js')

class Max extends CycleStatistics {
  push(value) {
    return super.push(value, () => {
      if (value > this._value) {
        this._value = value
      }
    })
  }
}

class Min extends CycleStatistics {
  push(value) {
    return super.push(value, () => {
      if (value < this._value) {
        this._value = value
      }
    })
  }
}

exports.Max = Max
exports.Min = Min
