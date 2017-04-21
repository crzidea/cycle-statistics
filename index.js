module.exports = class CycleNumber {
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
  update(value, execute) {
    // check resetting
    if (this._restarting) {
      this._restarting = false
      this._value = value
    } else {
      execute()
    }
    return this
  }
  max(value) {
    return this.update(value, () => {
      if (value > this._value) {
        this._value = value
      }
    })
  }
  min(value) {
    return this.update(value, () => {
      if (value < this._value) {
        this._value = value
      }
    })
  }
  restart() {
    this._restarting = true
    return this
  }
}
