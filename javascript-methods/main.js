// THE MATH OBJECT

var maximumValue = Math.max(23, 5, 58);
console.log('maximumValueResult:', maximumValue);

var heroes = ['Cyclops', 'Green Lantern', 'Bat Man', 'Frozone'];

var randomNumber = Math.random();
console.log(randomNumber);

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('randomIndexResult:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHeroResult', randomHero);

// ARRAY METHOD

var library = [
  {
    title: 'thatONeBookIShouldRead',
    author: 'thatOneGuyWhoWroteIt'
  },
  {
    title: 'thatOtherBookIShouldRead',
    author: 'thatOtherGuyWhoWroteIt'
  },
  {
    title: 'legitCantThinkOfAName',
    author: 'plsHelpMe'
  }
];

var lastBook = library.pop();
console.log(lastBook);

var firstBook = library.shift();
console.log(firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(1, 1);
console.log(library);

// STRING METHOD

var fullName = 'DreSean Sutton';

var firstAndLastName = fullName.split(' ');
console.log('firstAndLastNameResult', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log(sayMyName);
