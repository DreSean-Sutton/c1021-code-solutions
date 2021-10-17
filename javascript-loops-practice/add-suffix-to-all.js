/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newWordsArray = [];
  for (var i = 0; i < words.length; i++) {
    var newWords = words[i] + suffix;
    newWordsArray.push(newWords);
  }
  return newWordsArray;
}
