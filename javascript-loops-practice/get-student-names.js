/* exported getStudentNames */
function getStudentNames(students) {
  var studentNames = [];
  var studentNamesArray = [];
  for (var i = 0; i < students.length; i++) {
    studentNames = students[i].name;
    studentNamesArray.push(studentNames);
  }
  return studentNamesArray;
}
