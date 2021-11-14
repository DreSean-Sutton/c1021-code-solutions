/* exported take */
/*
1. Assign an empty array to var newArr
2. create a for loop that:
a. var i equals 0
b. code block initiates if i is less than count - 1
c. i is incremented by 1
3. if array.length strictly equals 0:
4. return newArr
5. else:
6. push array[i] into newArr
7. return newArr
*/
function take(array, count) {
  var newArr = [];
  for (var i = 0; i < count; i++) {
    if (array.length === 0) {
      return newArr;
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
