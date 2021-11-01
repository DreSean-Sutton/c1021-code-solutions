/* exported reverseWord */
/* have a place to store empty arrays
 get another storage location and give it the value of the length of the word. increment it downward
 get my array storage and give it the value of itself and the current index of word
return the finished array
*/
function reverseWord(word) {
  var backwardsWord = [];
  for (var i = word.length - 1; i >= 0; i--) {
    backwardsWord += word[i];
  }
  return backwardsWord;
}
