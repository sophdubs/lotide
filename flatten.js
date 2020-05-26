const flatten = function(arr) {
  let solutionArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      solutionArray.push(...arr[i]);
    } else {
      solutionArray.push(arr[i]);
    }
  }
  return solutionArray;
}

const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`🍎  Assertion Failed: ${arr1} !== ${arr2}`);
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]){
        console.log(`🍎  Assertion Failed: ${arr1} !== ${arr2}`);
        return;
      }
    }
    console.log(`🍏  Assertion Passed: ${arr1} === ${arr2}`);
  }
}

assertArraysEqual(flatten([1, [2, 3]]), [1, 2, 3]); // <= SHOULD PASS
assertArraysEqual(flatten([[]]), []); // <= SHOULD PASS
assertArraysEqual(flatten([1, [2, 3, 4], 5, [6, 7, 8]]), [1, 2, 3, 4, 5, 6, 7, 8]); // <= SHOULD PASS
assertArraysEqual(flatten([1, [2, 3, 4], 5, [6, 7, 8]]), [1, 2]); // <= SHOULD FAIL
