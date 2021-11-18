/* exported capitalizeWords */
/*
1. Assign to value of lowercased string to lowerCase
2. assign an empty string to var fullWord
3. assign an empty string to var capitalLetter
4. create a for loop that
a. assigns 0 to the var i
b. increases i if it's less than the length of string
c. increment i by 1
5. if i is strictly equal to 0
6. assign var firstLetter the value of loweerCase at it's 0 position
7. else if string at position [i - 1] === to a space string
8. capitalLetter = string at index i
9. fullWord is += uppercased capitalLetter
10. else
11. fullWord += lowercase at index i
12. return fullWord
*/

function capitalizeWords(string) {
  // debugger;
  var lowerCase = string.toLowerCase();
  var fullWord = '';
  var capitalLetter = '';
  for (var i = 0; i < string.length; i++) {
    if (i === 0) {
      var firstLetter = lowerCase.charAt(0);
      fullWord += firstLetter.toUpperCase();
    } else if ((string[i - 1]) === ' ') {
      capitalLetter = string.charAt(i);
      fullWord += capitalLetter.toUpperCase();
    } else {
      fullWord += lowerCase.charAt(i);
    }
  }
  return fullWord;
}
