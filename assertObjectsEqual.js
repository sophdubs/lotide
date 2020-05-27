const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

const handlePrimitiveValueEquality = function(val1, val2) {
  return val1 === val2;
};

const handleArrayValueEquality = function(arr1, arr2) {
  if (!Array.isArray(arr1) && Array.isArray(arr2)) return false;
  return eqArrays(arr1, arr2);
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (let [key, value] of Object.entries(object1)) {
    if (!object2[key]) {
      return false;
    } else {
      let result = true;
      if (typeof value !== 'object') {
        result = handlePrimitiveValueEquality(value, object2[key]);
      } else if (Array.isArray(value)) {
        result = handleArrayValueEquality(value, object2[key]);
      }
      if (!result) return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🍏  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🍎  Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a: 1, b: 1}, {a: 1, b: 1}); //Expected to pass
assertObjectsEqual({a: 1, b: 1}, {a: 1, b: 2}); //Expected to fail