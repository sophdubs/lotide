const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🍏  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍎  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(inputObj, inputVal) {
  for (let [key, value] of Object.entries(inputObj)) {
    if (value === inputVal) {
      return key;
    }
  }
};


// Basic test cases
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// Repeat values. Should return the key of the first instance of input Value
const animalsILike = {
  cat: true,
  dog: true,
  snake: true,
  cockroach: false,
  worms: false
};

assertEqual(findKeyByValue(animalsILike, true), "cat");
assertEqual(findKeyByValue(animalsILike, false), 'cockroach');
