const assert = require('assert')
const CycleNumber = require('.')

describe('CycleNumber()', () => {
  it('should be able to construct instance', () => {
    const number = new CycleNumber
    assert.equal(number, 0)
  })
  it('should be able to construct instance with initial value', () => {
    const number = new CycleNumber(1)
    assert.equal(number, 1)
  })
  it('should cound be converted to String', () => {
    const number = new CycleNumber(1)
    assert.strictEqual(`${number}`, '1')
  })
  it('should cound be converted to JSON', () => {
    const number = new CycleNumber(1)
    assert.strictEqual(JSON.stringify(number), '1')
  })
})

describe('#max()', () => {
  const number = new CycleNumber
  it('should able to be called', () => {
    assert.equal(number.max(1), 1)
    assert.equal(number, 1)
    assert.equal(number.max(2), 2)
  })
  it('should be not changed immediately after #restart()', () => {
    number.restart()
    assert.equal(number, 2)
  })
  it('should be changed immediately after one more #max()', () => {
    assert.equal(number.max(1), 1)
  })
})

describe('#min()', () => {
  const number = new CycleNumber
  it('should able to be called', () => {
    assert.equal(number.min(-1), -1)
    assert.equal(number, -1)
    assert.equal(number.min(-2), -2)
  })
  it('should be not changed immediately after #restart()', () => {
    number.restart()
    assert.equal(number, -2)
  })
  it('should be changed immediately after one more #min()', () => {
    assert.equal(number.min(-1), -1)
  })
})
