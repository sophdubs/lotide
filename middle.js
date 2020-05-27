// Previously implemented
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

// Previously implemented
const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  if (result) {
    console.log(`🍏  Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🍎  Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

// Helper function to determine if num is even. Returns boolean. 
const isEven = function(num) {
  return num % 2 === 0;
}

// Helper function to calculated index of middle value in the array. 
const calculateMiddleIndex = function(arr) {
  return Math.floor(arr.length / 2);
}

const middle = function(inputArr) {
  // Handles cases where input array is length 0, 1, or 2. Returns empty array. 
  if (inputArr.length <= 2) return [];
  
  // Call helper function to determine middle index
  let middleIndex = calculateMiddleIndex(inputArr);
  
  if (isEven(inputArr.length)) {
    // If array.length is even, we return the values at middleIndex -1 and middle index inside a new array.
    return [inputArr[middleIndex - 1], inputArr[middleIndex]];
  } else {
    // Else, we return the value at middleIndex in a new array. 
    return [inputArr[middleIndex]];
  }

}

// Passing all tests
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); 
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); 
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 