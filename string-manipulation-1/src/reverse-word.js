/* exported reverseWord */

function reverseWord(word) {
  var backwardsWord = [];
  for (var i = word.length - 1; i >= 0; i--) {
    backwardsWord += word[i];
  }
  return backwardsWord;
}
