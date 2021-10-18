/* exported filterOutNulls */
function filterOutNulls(values) {
  var forNonNulls = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      forNonNulls.push(values[i]);
    }
  }
  return forNonNulls;
}
