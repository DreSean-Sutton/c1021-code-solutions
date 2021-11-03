/* eslint-disable no-compare-neg-zero */
/* exported compact */

/* Take an empty array and store it into a variable called newArr
Take the value of 0 and store it in a new variable called i. check if i is less than the length of array
if array at i index is not strictly equal to false, undefined, null, -0, 0, empty string, or array[i]
push the value of array at i index into newArr
return newArr
*/
function compact(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if ((array[i] !== false) && (array[i] !== undefined) && (array[i] !== null) && (array[i] !== '') && (array[i] !== -0) && (array[i] !== 0) && (array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
