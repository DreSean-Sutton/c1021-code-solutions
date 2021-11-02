/* exported calculator */

var calculator = {
  add: function (x, y) {
    var sum = (x + y);
    return sum;
  },

  subtract: function (x, y) {
    var difference = (x - y);
    return difference;
  },

  multiply: function (x, y) {
    var multiply = (x * y);
    return multiply;
  },
  divide: function (x, y) {
    var divide = (x / y);
    return divide;
  },
  square: function (x) {
    var square = (x * x);
    return square;
  },
  sumAll: function (numbers) {
    var sum = null;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  },
  getAverage: function (numbers) {
    var average = null;
    for (var i = 0; i < numbers.length; i++) {
      average += numbers[i];
    }
    return average / numbers.length;
  }
};
