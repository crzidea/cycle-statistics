# Cycle Statistics
This module would be useful for statistics.

## Example

```js
const CycleStatistics = require('cycle-statistics')

const statistics = new CycleStatistics.Max
statistics.push(2)      // => 2
statistics.push(1)      // => 2
statistics.push(3)      // => 3
statistics.restart()    // => 3
+statistics             // => 3
statistics.push(2)      // => 2
statistics.push(1)      // => 2
statistics.push(3)      // => 3
```
