/* exported getWords */

function getWords(string) {
  if (string === '') {
    return [];
  }
  var splitString = string.split(' ');
  return splitString;
}
