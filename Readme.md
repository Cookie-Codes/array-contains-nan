# Array-Contains-NaN

[![Build Status](https://travis-ci.org/al-chaudhari/array-contains-nan.svg?branch=master)](https://travis-ci.org/al-chaudhari/array-contains-nan)
[![Coverage Status](https://coveralls.io/repos/github/al-chaudhari/array-contains-nan/badge.svg?branch=master)](https://coveralls.io/github/al-chaudhari/array-contains-nan?branch=master)
[![npm](https://img.shields.io/npm/v/arraycontainsnan)](https://www.npmjs.com/package/arraycontainsnan)

Simple Utility to Check weather Array Contains NaN or Not

```javascript
let values = [ture, 'undefined', [], {}];
arrayContainsNaN(values); // false
values = [false, NaN];
arrayContainsNaN(values); // true
```
