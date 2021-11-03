/* exported getValues */

/*
1. Store an empty array to value
2. use a for in loop to find the values in object
3. push the value of object[key] into values
4. return values
*/
function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
