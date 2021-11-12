/* exported firstChars */
/*
1. assign an empty string to the var firstCharacters
2. create a for loop that:
a. assigns 0 to the var i
b. i increases if it's less than the length of string
c. i increments by 1 each iteration
3. if i is less than length:
a. firstCharacters += string[i]
4. return firstCharacters
*/

function firstChars(length, string) {
  var firstCharacters = '';
  for (var i = 0; i < string.length; i++) {
    if (i < length) {
      firstCharacters += string[i];
    }
  }
  return firstCharacters;
}
