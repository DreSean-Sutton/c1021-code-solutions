/* exported isVowel */
/* if the character is equal to capital or lowercase a
return true
/* if the character is equal to capital or lowercase e
return true
/* if the character is equal to capital or lowercase i
return true
/* if the character is equal to capital or lowercase o
return true
/* if the character is equal to capital or lowercase u
return true
otherwise,
return false
*/
function isVowel(character) {
  if (character === 'a' || character === 'A') {
    return true;
  } else if (character === 'e' || character === 'E') {
    return true;
  } else if (character === 'i' || character === 'I') {
    return true;
  } else if (character === 'o' || character === 'O') {
    return true;
  } else if (character === 'u' || character === 'U') {
    return true;
  } else {
    return false;
  }
}
