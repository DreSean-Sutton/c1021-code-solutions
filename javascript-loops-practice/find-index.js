/* exported findIndex */
function findIndex(array, value) {
  var sameNumbers = [];
  for (var i = 0; i < array.length; i++) {
    if (array === value) {
      (sameNumbers.push(value));
    } else {
      sameNumbers = -1;
    }
  }
  return sameNumbers;
}
