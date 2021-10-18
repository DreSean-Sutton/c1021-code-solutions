/* exported findIndex */
function findIndex(array, value) {
  var sameNumbers = [];
  for (var i = 0; i < array.length; i++) {
    sameNumbers = value.findIndex(array[i]);
  }
  return sameNumbers;
}
