const CycleStatistics = require('./lib/cycle-statistics.js')
const {Max, Min} = require('./lib/maxmin.js')
CycleStatistics.Max = Max
CycleStatistics.Min = Min
CycleStatistics.Duration = require('./lib/duration.js')
module.exports = CycleStatistics
