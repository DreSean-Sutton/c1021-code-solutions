// EXERCISE 1

var colors = ['red', 'white', 'blue'];
console.log('value of color[0]:', colors[0]);
console.log('value of color[1]:', colors[1]);
console.log('value of color[2]:', colors[2]);

console.log('America is ' + colors[0] + ', ' + colors[1] + ', ' + colors[2]);

colors[2] = 'green';

console.log('Mexico is ' + colors[0] + ', ' + colors[1] + ', ' + colors[2]);

console.log(colors);

// EXERCISE 2

var students = ['Bob1', 'Bob2', 'Bob3', 'Bob4'];

var numberOfStudents = students.length;

console.log('there are ' + numberOfStudents + ' students in the class.');

var lastIndex = numberOfStudents - 1;

var lastStudent = students[lastIndex];

console.log('the name of the last student is:', lastStudent);

console.log(students);
