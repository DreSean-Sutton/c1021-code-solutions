console.log('hello, world');
var newElement = document.querySelector('h1');
console.log(newElement);
console.dir(newElement);

var newElementId = document.getElementById('explanation');
console.log(newElementId);
console.dir(newElementId);

var hintClass = document.getElementsByClassName('hint');
console.log(hintClass);
console.dir(hintClass);

var allPElements = document.querySelectorAll('p');
console.log(allPElements);

var allExampleLinkClasses = document.getElementsByClassName('example-link');
console.log(allExampleLinkClasses);
