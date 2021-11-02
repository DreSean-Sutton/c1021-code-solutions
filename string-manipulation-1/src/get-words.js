/* exported getWords */
/* if the string is equal to nothing
return nothing
split the string into seperate words and store that value
return the stored information
*/
function getWords(string) {
  if (string === '') {
    return [];
  }
  var splitString = string.split(' ');
  return splitString;
}
