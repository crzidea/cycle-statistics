# Cycle Number
This module would be useful for statistics.

## Example

```js
const cycle = new CycleNumber
cycle.max(2)    // => 2
cycle.max(1)    // => 2
cycle.max(3)    // => 3
cycle.restart() // => 3
cycle           // => 3
cycle.max(2)    // => 2
cycle.max(1)    // => 2
cycle.max(3)    // => 3
```
