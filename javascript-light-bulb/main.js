var $lightbulb = document.querySelector('button');
var $htmlBackground = document.querySelector('html');

var offAndOnFunction = offAndOn;
$lightbulb.addEventListener('click', offAndOnFunction);
function offAndOn(event) {
  if (($lightbulb.className === 'yellow-lightbulb') && ($htmlBackground.className === 'white')) {
    $lightbulb.className = 'gray-lightbulb';
    $htmlBackground.className = 'black-html-background';
  } else {
    $lightbulb.className = 'yellow-lightbulb';
    $htmlBackground.className = 'white';
  }
}
