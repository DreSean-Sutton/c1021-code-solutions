/* exported setValue */

/*
1. check if object, key, orr value are equal to undefined
  a. If they are, return the condition
2. Assign the value of (object at key = value) to a new variable called newObj
return newObj
*/
function setValue(object, key, value) {
  object[key] = value;
}
