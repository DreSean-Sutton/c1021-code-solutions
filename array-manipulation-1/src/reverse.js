/* exported reverse */
/* get a place to store information and name it newArr
Take the length of the array - 1 and assign that information to a new storage named i. the loop through until i equals 0
push the index of array to newArr and increment i down by 1
return newArr
*/
function reverse(array) {
  var newArr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}
