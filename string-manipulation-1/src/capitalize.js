/* exported capitalize */
/* I need to turn the word into lowercase and store that information.
i need a place to store the first letter of the word.
Add both of my stored information together
*/
function capitalize(word) {
  var lowerCase = word.toLowerCase();
  var firstLetter = word.charAt(0);
  return firstLetter.toUpperCase() + lowerCase.slice(1);
}
