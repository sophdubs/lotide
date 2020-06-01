
const takeUntil = function(inputArr, callback) {
  let outputArr = [];

  for (let item of inputArr) {
    if (!callback(item)) {
      outputArr.push(item);
    } else {
      return outputArr;
    }
  }
  return outputArr;
};

module.exports = takeUntil;