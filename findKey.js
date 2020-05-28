const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🍏  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍎  Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

const findKey = function(inputObj, callback) {
  for (let key of Object.keys(inputObj)) {
    if (callback(inputObj[key])) {
      return key;
    }
  }
};

const stars = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const result1 = findKey(stars, x => x.stars === 1);
const result2 = findKey(stars, x => x.stars === 2);
const result3 = findKey(stars, x => x.stars === 3);
const result4 = findKey(stars, x => x.stars === 4);
assertEqual(result1, 'Blue Hill');
assertEqual(result2, 'noma');
assertEqual(result3, 'Akaleri');
assertEqual(result4, undefined);

