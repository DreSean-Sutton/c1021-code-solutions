var $userList = document.querySelector('#user-list');
var xmlHR = new XMLHttpRequest();
// debugger;
xmlHR.open('GET', 'https://jsonplaceholder.typicode.com/users');
xmlHR.responseType = 'json';
xmlHR.addEventListener('load', function () {
  var user = xmlHR.response;
  console.log('status:', xmlHR.status);
  console.log('response:', user);
  for (var i = 0; i < user.length; i++) {
    var users = user[i];
    var $liElement = document.createElement('li');
    $liElement.textContent = users.name;
    $userList.appendChild($liElement);
  }
});
xmlHR.send();
