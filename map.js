const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  if (result) {
    console.log(`🍏  Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🍎  Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


// Our map function will take in two arguments:
// 1- An array to map
// 2- A callback function
// The map function will return a new array based on the results of the callback function.

const map = function(arr, callback) {
  let resultArray = [];

  for (let item of arr) {
    resultArray.push(callback(item));
  }

  return resultArray;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); // <= SHOULD PASS
const nums = [1, 2, 3, 4, 5];
const results2 = map(nums, num => num * 2);
assertArraysEqual(results2, [2, 4, 6, 8, 10]);
const results3 = map(nums, num => num.toString());
assertArraysEqual(results3, ['1', '2', '3', '4', '5']);


const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
const result = input.map(obj => Math.sqrt(obj.x ** 2 + obj.y ** 2));

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);