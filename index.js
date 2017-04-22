class CycleStatistics {
  constructor(value) {
    this._value = value || 0
    this._restarting = false
  }
  valueOf() {
    return this._value
  }
  toString() {
    return this._value.toString()
  }
  toJSON() {
    return this._value
  }
  push(value, execute) {
    // check resetting
    if (this._restarting) {
      this._restarting = false
      this._value = value
    } else if (execute) {
      execute()
    } else {
      this._value = value
    }
    return this
  }
  restart() {
    this._restarting = true
    return this
  }
}

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

CycleStatistics.Max = Max
CycleStatistics.Min = Min
module.exports = CycleStatistics
