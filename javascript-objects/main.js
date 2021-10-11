var student = {
  firstName: 'Dre Sean',
  lastName: 'Sutton',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Full Name:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Special Ed Bus Driver';
console.log('my life:', student);

var myCar = {
  make: 'Honda',
  model: 'Civic',
  year: 2009
};

myCar.color = 'Blue';
myCar.isConvertible = false;

console.log('My vehicle color:', myCar.color);
console.log('Is my car a convertible:', myCar.isConvertible);

var pet = {
  name: 'Bella',
  type: 'Chihuahua'
};

delete pet.name;
delete pet.type;
console.log('Does my pet exist?:', pet);
