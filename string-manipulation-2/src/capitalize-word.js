/* exported capitalizeWord */
/*
1. assign a var lowerCase the value of word fully lowercased
2. select the first letter of word and assign it to var firstLetter
3. connect firstLetter and LowerCase.slice(1)
4. if finalWord is strictly equal to 'Javascript'
5. return 'JavaScript'
6. else:
7. return finalWord
*/

function capitalizeWord(word) {
  var lowerCase = word.toLowerCase();
  var firstLetter = word.charAt(0);
  var finalWord = firstLetter.toUpperCase() + lowerCase.slice(1);
  if (finalWord === 'Javascript') {
    return 'JavaScript';
  } else {
    return finalWord;
  }
}
