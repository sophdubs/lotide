const letterPositions = function(inputStr) {
  let outputObj = {};

  inputStr.split('').forEach((char,index) => {
    if (outputObj[char]) {
      outputObj[char].push(index);
    } else {
      outputObj[char] = [index];
    }
  });
  return outputObj;
};

module.exports = letterPositions;