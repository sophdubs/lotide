const removeSpaces = function(str) {
  return str.replace(/\s/g, '');
};

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
};

module.exports = countLetters;


