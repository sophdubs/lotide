const findKey = function(inputObj, callback) {
  for (let key of Object.keys(inputObj)) {
    if (callback(inputObj[key])) {
      return key;
    }
  }
};

module.exports = findKey;