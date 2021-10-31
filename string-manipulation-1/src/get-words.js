/* exported getWords */

function getWords(string) {
  var arrayString = [];
  var splitString = string.split(' ');
  for (var i = 0; i < string.length; i++) {
    arrayString.push(splitString[i]);
  }
  return arrayString;
}
