const assertArraysEqual = require('../assertArraysEqual');

// Passing test cases:
assertArraysEqual([1, 2, 3], [1, 2, 3]); 
assertArraysEqual([], []); 
// Failing test cases:
assertArraysEqual([1, 2, 3], [1, 2]); 
assertArraysEqual([1, 2, 3], [1, 2, 4]);
