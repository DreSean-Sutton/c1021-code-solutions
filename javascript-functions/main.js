function convertMinutesToSeconds(x) {
  return x * 60;

}

var secondsFromMinutes = convertMinutesToSeconds(10);
console.log('Amount of seconds:', secondsFromMinutes);

function greet(name) {
  return name;
}

var myName = greet('Dre');
console.log('Greeting:', 'Hey, ' + myName);

function getArea(x, y) {
  return (x * y);
}

var myHouseArea = getArea(12, 8);
console.log('The area is:', myHouseArea);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
var myFirstName = getFirstName({ firstName: 'Dre Sean', lastName: 'Sutton' });
console.log('My first name is:', myFirstName);

function getLastElement(array) {
  var last = array.length - 1;
  return array[last];
}

var lastInArray = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('The last index:', lastInArray);
