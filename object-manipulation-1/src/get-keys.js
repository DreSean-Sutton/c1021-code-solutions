/* exported getKeys */
/* have a place to store information (keys)
look at each value in the object's index
push those values into key's storage
return the value of keys
*/
function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
