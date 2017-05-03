const CycleStatistics = require('./cycle-statistics.js')

class Duration extends CycleStatistics {
  constructor(value) {
    super(value)
    this._phases = []
    this._lastStepAt = null
  }
  toJSON() {
    return this._phases
  }
  push(value) {
    this._phases.push(value)
    this._value += value
    return this
  }
  step() {
    const stepAt = Date.now()
    if (null === this._lastStepAt) {
      this._lastStepAt = stepAt
      return 0
    }
    const value = stepAt - this._lastStepAt
    this._lastStepAt = stepAt
    this.push(value)
    return value
  }
  restart() {
    super.restart()
    this._value = 0
    this._phases = []
    this._lastStepAt = null
  }
  merge(duration) {
    const srcLength = this._phases.length
    const phases = duration.toJSON()
    for (var i = 0, len = phases.length; i < len; i++) {
      const value = phases[i]
      if (i >= srcLength) {
        this._phases.push(value)
      } else {
        this._phases[i] += value
      }
    }
    this._value += duration
  }
  *[Symbol.iterator]() {
    yield* this._phases
  }
}

module.exports = Duration
