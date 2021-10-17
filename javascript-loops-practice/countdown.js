/* exported countdown */
function countdown(number) {
  var xplosion = [];
  while (number >= 0) {
    xplosion.push(number);
    number--;
  }
  return xplosion;
}
