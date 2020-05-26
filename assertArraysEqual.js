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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // <= SHOULD PASS
assertArraysEqual([], []); // <= SHOULD PASS
assertArraysEqual([1, 2, 3], [1, 2]); // <= SHOULD FAIL
assertArraysEqual([1, 2, 3], [1, 2, 4]); // <= SHOULD FAIL
