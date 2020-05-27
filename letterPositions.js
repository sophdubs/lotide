const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  if (result) {
    console.log(`🍏  Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🍎  Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const letterPosition = function(inputStr) {
  let outputObj = {};

  inputStr.split('').forEach((char,index) => {
    if (outputObj[char]) {
      outputObj[char].push(index);
    } else {
      outputObj[char] = [index];
    }
  });
  return outputObj;
};



// Test cases
const result = letterPosition('hello');

assertArraysEqual(result['h'], [0]); // <= SHOULD PASS
assertArraysEqual(result['e'], [1]); // <= SHOULD PASS
assertArraysEqual(result['l'], [2, 3]); // <= SHOULD PASS
assertArraysEqual(result['o'], [4]); // <= SHOULD PASS





