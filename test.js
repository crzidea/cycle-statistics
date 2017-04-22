const assert = require('assert')
const Statistics = require('.')

describe('CycleStatistics()', () => {
  it('should be able to construct instance', () => {
    const statistics = new Statistics
    assert.equal(statistics, 0)
  })
  it('should be able to construct instance with initial value', () => {
    const statistics = new Statistics(1)
    assert.equal(statistics, 1)
  })
  it('should cound be converted to String', () => {
    const statistics = new Statistics(1)
    assert.strictEqual(`${statistics}`, '1')
  })
  it('should cound be converted to JSON', () => {
    const statistics = new Statistics(1)
    assert.strictEqual(JSON.stringify(statistics), '1')
  })
  describe('update workflow', () => {
    const statistics = new Statistics(1)
    it('should cound be updated', () => {
      statistics.push(2)
      assert.equal(+statistics, 2)
    })
    it('should be not changed immediately after #restart()', () => {
      statistics.restart()
      assert.equal(statistics, 2)
    })
    it('should be changed immediately after one more #push()', () => {
      assert.equal(statistics.push(1), 1)
    })
  })
})

describe('CycleStatistics.Max()', () => {
  const statistics = new Statistics.Max
  it('should able to be called', () => {
    assert.equal(statistics.push(1), 1)
    assert.equal(statistics, 1)
    assert.equal(statistics.push(2), 2)
  })
  it('should be not changed immediately after #restart()', () => {
    statistics.restart()
    assert.equal(statistics, 2)
  })
  it('should be changed immediately after one more #push()', () => {
    assert.equal(statistics.push(1), 1)
  })
  it('should be not changed if not greater than current value', () => {
    assert.equal(statistics.push(0), 1)
  })
})

describe('CycleStatistics.Min()', () => {
  const statistics = new Statistics.Min
  it('should able to be called', () => {
    assert.equal(statistics.push(-1), -1)
    assert.equal(statistics, -1)
    assert.equal(statistics.push(-2), -2)
  })
  it('should be not changed immediately after #restart()', () => {
    statistics.restart()
    assert.equal(statistics, -2)
  })
  it('should be changed immediately after one more #push()', () => {
    assert.equal(statistics.push(-1), -1)
  })
  it('should be not changed if not less than current value', () => {
    assert.equal(statistics.push(0), -1)
  })
})
