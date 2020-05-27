const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🍏  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍎  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const removeSpaces = function(str) {
  return str.replace(/\s/g, '');
}

const countLetters = function(str) {
  const noSpaces = removeSpaces(str);
  const outputObj = {};

  for (let char of noSpaces) {
    if (outputObj[char]) {
      outputObj[char] += 1;
    } else {
      outputObj[char] = 1;
    }
  }

  return outputObj;
}

const result = countLetters('abcdefgaaa');
assertEqual(result["a"], 4);
assertEqual(result["b"], 1);
assertEqual(result["c"], 1);
assertEqual(result["d"], 1);
assertEqual(result["e"], 1);
assertEqual(result["f"], 1);
assertEqual(result["g"], 1);
assertEqual(result["h"], undefined);



