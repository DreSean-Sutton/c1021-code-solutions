/* exported ransomCase */
/*
1. assign an empty string to the variable fullWord
2. assign an empty string to the variable specialLetter
3. assign an empty string to the variable capitalLetter
4.lowercase string and assign it's value to the variable lowerCase;
create a for loop that
a. gives the var i a value of 0
b. i increases up to string.length
c. i increments by 1 each initialization
5. if i % 2 === 0
6. specialLetter is equal to lowercase at position i
7.fullword += var specialLetter
8. else
9. specialLetter is equal to lowercase at position i
10. capitalLetter is equal to capitalized specialLetter
11. fullWord += capitalLetter
12. return fullWord
*/

function ransomCase(string) {
  var fullWord = '';
  var lowerCase = string.toLowerCase();
  var specialLetter = '';
  var capitalLetter = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      specialLetter = lowerCase.charAt(i);
      fullWord += specialLetter;
    } else {
      specialLetter = lowerCase.charAt(i);
      capitalLetter = specialLetter.toUpperCase();
      fullWord += capitalLetter;
    }
  }
  return fullWord;
}
