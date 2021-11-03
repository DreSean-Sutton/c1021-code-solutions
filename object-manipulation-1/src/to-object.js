/* exported toObject */
/* 1.Assign an empty object literal to the new variable newObj
2. assign the value of keyValuePair[1] to newObj at keyValuePair[0]
return newObj
*/
function toObject(keyValuePair) {
  var newObj = {};
  newObj[keyValuePair[0]] = keyValuePair[1];
  return newObj;
}
