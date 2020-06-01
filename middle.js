// Helper function to determine if num is even. Returns boolean.
const isEven = function(num) {
  return num % 2 === 0;
};

// Helper function to calculated index of middle value in the array.
const calculateMiddleIndex = function(arr) {
  return Math.floor(arr.length / 2);
};

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
};

module.exports = middle;