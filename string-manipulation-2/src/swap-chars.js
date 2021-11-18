/* exported swapChars */
/*
1. assign a empty string to the var firstSwap
2. assign a empty string to the var secondSwap
3. assign a empty string to the var finalString
4. create a for loop that:
a. var i = 0
b. increase i if it's less than string.length
c. increment i each iteration
5. if i is strictly equal to firstIndex:
6. firstSwap = string at secondIndex index
7. finalString += firstSwap
8. else if i is strictly equal to secondIndex
9. secondSwap = string at firstIndex index
10. finalString += secondSwap
11. else
12. finalString += string at position i
13. return finalString
*/
function swapChars(firstIndex, secondIndex, string) {
  var firstSwap = '';
  var secondSwap = '';
  var finalString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      firstSwap = string.charAt(secondIndex);
      finalString += firstSwap;
    } else if (i === secondIndex) {
      secondSwap = string.charAt(firstIndex);
      finalString += secondSwap;
    } else {
      finalString += string[i];
    }
  }
  return finalString;
}
