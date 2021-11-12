/* exported numVowels */
/*

1. create a for loop that:
a. give the value 0 to var i
b. i increases up to the length of string's index
c. i increments by 1 each time
2. create an if statement that says if string[i] === string(a, e, i, o, u)
3. increment numberOfVowels by 1
*/

function numVowels(string) {
  var numberOfVowels = 0;
  string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if ((string[i] === 'a') || (string[i] === 'e') || (string[i] === 'o') || (string[i] === 'u')) {
      numberOfVowels++;
    }
  }
  return numberOfVowels;
}
