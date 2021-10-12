function convertMinutesToSeconds(x) {
  var secondsCalculated = x * 60;
  console.log('Amount of seconds:', secondsCalculated);
  return secondsCalculated;
}

convertMinutesToSeconds(10);

function greet(name) {
  console.log('Greeting:', 'Hey, ' + name);
  return name;
}

greet('Dre');

function getArea(x, y) {
  console.log('The area is:', x * y);
  return (x, y);
}

getArea(12, 8);

function getFirstName(person) {
  var fullName = person.firstName;
  console.log('My first name is:', fullName);
  return fullName;
}

getFirstName({ firstName: 'Dre Sean', lastName: 'Sutton' });

function getLastElement(array) {
  var last = array.length - 1;
  console.log(array[last]);
  return array[last];
}

getLastElement(['propane', 'and', 'propane', 'accessories']);
