/* exported capitalize */

function capitalize(word) {
  var lowerCase = word.toLowerCase();
  var firstLetter = word.charAt(0);
  return firstLetter.toUpperCase() + lowerCase.slice(1);
}
