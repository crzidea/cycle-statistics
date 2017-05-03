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

module.exports = CycleStatistics
