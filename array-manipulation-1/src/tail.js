/* exported tail */

/* store an empty array into a variable called newArr
Take the value of 1 and store it into a new variable called i.
if i is less than the length of array, push array at i index into newArr
*/
function tail(array) {
  var newArr = [];
  for (var i = 1; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
