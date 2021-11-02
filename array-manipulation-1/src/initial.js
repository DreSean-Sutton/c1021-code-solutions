/* exported initial */
/* create a place named newArr to store an empty array
create a place to store information and make it's value equal 0. increment this value by 1 everytime it goes through the loop up to the length of the array - 1
push the information from array into newArr each time the loop is implemented
return the value of newArr
*/
function initial(array) {
  var newArr = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
