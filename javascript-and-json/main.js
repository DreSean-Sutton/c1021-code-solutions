var bigBooks = [
  {
    title: 'Something Important',
    author: 'Someone Important',
    isbn: '1234'
  },
  {
    title: 'Something Super Important',
    author: 'Someone Super Important',
    isbn: '5678'
  },
  {
    title: 'Something Most Important',
    author: 'Someone Most Important',
    isbn: '9010'
  }
];

console.log('The typeof bigBooks:', typeof bigBooks);

var stringBigBooks = JSON.stringify(bigBooks);
console.log('Stringified bigBooks:', stringBigBooks, typeof stringBigBooks);
var obliviousStudent = '{"name":"DreSean","id":1234}';
console.log('type of and obliviousStudentResult:', obliviousStudent, typeof obliviousStudent);
JSON.parse(obliviousStudent);
console.log('obliviousStudentJSONResult and typeof:', obliviousStudent, typeof obliviousStudent);
