/* exported truncate */
/*
1. Take a empty string and assign it to a var named shorterString
2. Create a for loop that
  a. Gives var i the the value of 0
  b. loops until i is less-than or equal-to the length parameter of string parameter
  c. increments by 1 each initialization
3. push the value of string[length] into shorterString
4. concatenate shorterstring with the string '...'

*/
function truncate(length, string) {
  var shorterString = '';
  for (var i = 0; i <= length; i++) {
    shorterString.push(string.charAt([length]));
  }
  return shorterString + '...';
}
