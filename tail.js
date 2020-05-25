const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🍏  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍎  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  return arr.slice(1, arr.length);
};

// Basic tests
assertEqual(tail([1, 2, 3]).length, 2);
assertEqual(tail([1, 2, 3])[0], 2);
assertEqual(tail([1, 2, 3])[1], 3);

// Making sure original array is not mutated by tail function
let testArray = ['cat', 'dog', 'bird', 'rabbit'];
let tailedArray = tail(testArray);
assertEqual(testArray.length, 4);
assertEqual(tailedArray.length, 3);

// Array length 1 should return empty array
assertEqual(tail(['single']).length, 0);
assertEqual(Array.isArray(tail(['single'])), true);

// Empty array should return empty array
assertEqual(tail([]).length, 0);
assertEqual(Array.isArray(tail([])), true);


