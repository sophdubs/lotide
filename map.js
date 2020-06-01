const map = function(arr, callback) {
  let resultArray = [];

  for (let item of arr) {
    resultArray.push(callback(item));
  }

  return resultArray;
};

module.exports = map;