/* exported findIndex */
function findIndex(array, value) {
  var arrayIndex = [];
  for (var i = 0; i < array.length; i++) {
    if (array === value) {
      arrayIndex = [i];
      return arrayIndex;
    }
  }
  return -1;
}
