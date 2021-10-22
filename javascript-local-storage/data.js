/* exported todos */

var todos = [];
var previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) {
  todos = (JSON.parse(previousTodosJSON));
}

// eslint-disable-next-line no-unused-vars
var $saveTodos = window.addEventListener('beforeunload', storageForYou);

function storageForYou(event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}
