const without = function(sourceArr, itemsToRemove) {
  return sourceArr.filter(item => !itemsToRemove.includes(item));
};

module.exports = without;