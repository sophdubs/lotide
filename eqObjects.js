const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🍏  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍎  Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// Primitives as values tests:
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

// Arrays as values tests
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);