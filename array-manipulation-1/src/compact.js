/* eslint-disable no-compare-neg-zero */
/* exported compact */

function compact(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if ((array[i] !== false) && (array[i] !== undefined) && (array[i] !== null) && (array[i] !== '') && (array[i] !== -0) && (array[i] !== 0) && (array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
