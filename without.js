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

const without = function(sourceArr, itemsToRemove) {
  return sourceArr.filter(item => !itemsToRemove.includes(item));
}

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]))

assertArraysEqual(without([1, 2, 3], ['a']),[1, 2, 3]); // <= SHOULD PASS
assertArraysEqual(without([1, 2, 3], []),[1, 2, 3]); // <= SHOULD PASS
assertArraysEqual(without([1, 2, 3],[1]), [1, 2, 3]); // <= SHOULD FAIL
assertArraysEqual(without([1, 2, 3], [1, 2]), [1, 2, 3]); // <= SHOULD FAIL


let originalArray = [1, 2, 3];
let modifiedArray = without(originalArray, [1]);
assertArraysEqual(originalArray, [1, 2, 3]); // <= SHOULD PASS
assertArraysEqual(originalArray, modifiedArray); // <= SHOULD FAIL
