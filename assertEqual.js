const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🍏  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍎  Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// identical vs non-identical strings
assertEqual('Sophie', 'Sophie');
assertEqual('Lighthouse Labs', 'Bootcamp');
// identical vs non-identical numbers
assertEqual(1, 1);
assertEqual(1, 2);





