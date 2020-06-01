const flatten = function(arr) {
  let solutionArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      solutionArray.push(...arr[i]);
    } else {
      solutionArray.push(arr[i]);
    }
  }
  return solutionArray;
}

module.exports = flatten;