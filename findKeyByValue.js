const findKeyByValue = function(inputObj, inputVal) {
  for (let [key, value] of Object.entries(inputObj)) {
    if (value === inputVal) {
      return key;
    }
  }
};

module.exports = findKeyByValue;