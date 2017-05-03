# Cycle Statistics

[![Build Status](https://travis-ci.org/crzidea/cycle-statistics.svg?branch=master)](https://travis-ci.org/crzidea/cycle-statistics)
[![npm version](https://badge.fury.io/js/cycle-statistics.svg)](https://badge.fury.io/js/cycle-statistics)

This module would be useful for statistics.

## Install

```js
npm install cycle-statistics
```

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

## Statistic Types

- Last (default)
- Max
- Min
- Duration
