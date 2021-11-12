/* exported lastChars */
/*
1. assign an empty string to the var lastCharacters
2. create a for loop that:
  a.assigns 0 to the var i
b.i increases if it's less than the length of string
c.i increments by 1 each iteration
3. if i is greater or equal to string.length - length:
a.lastCharacters += string[i]
4. return lastCharacters
*/

function lastChars(length, string) {
  var lastCharacters = '';
  for (var i = 0; i < string.length; i++) {
    if (i >= string.length - length) {
      lastCharacters += string[i];
    }
  }
  return lastCharacters;
}
