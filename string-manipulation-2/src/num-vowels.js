/* exported numVowels */
/*
1. assign the value of 0 to the var numberOfVowels
2. assign an empty string to var lowerCase
3. create a for loop that:
a. give the value 0 to var i
b. i increases up to the length of string's index
c. i increments by 1 each time
4. create an if statement that says if lowerCase[i] === a, e, i, o, or u
5. increment numberOfVowels by 1
6. return numberOfVowels
*/

function numVowels(string) {
  var numberOfVowels = 0;
  var lowerCase = '';
  lowerCase = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if ((lowerCase[i] === 'a') || (lowerCase[i] === 'e') || (lowerCase[i] === 'i') || (string[i] === 'o') || (lowerCase[i] === 'u')) {
      numberOfVowels++;
    }
  }
  return numberOfVowels;
}
