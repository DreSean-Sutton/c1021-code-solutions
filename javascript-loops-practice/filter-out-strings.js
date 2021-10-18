/* exported filterOutStrings */
function filterOutStrings(strings) {
  var noStrings = [];
  for (var i = 0; i < strings.length; i++) {
    if (typeof (strings[i]) === 'string') {
      delete strings[i];
    } else noStrings.push(strings[i]);
  }
  return noStrings;
}
