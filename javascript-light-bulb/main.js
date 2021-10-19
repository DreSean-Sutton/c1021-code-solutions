var $lightbulb = document.querySelector('button');
var $htmlBackground = document.querySelector('html');
var lightIsOn = true;
$lightbulb.addEventListener('click', offAndOn);
function offAndOn(event) {
  if (lightIsOn) {
    $lightbulb.className = 'gray-lightbulb';
    $htmlBackground.className = 'black-html-background';
    lightIsOn = false;
  } else {
    $lightbulb.className = 'yellow-lightbulb';
    $htmlBackground.className = 'white';
    lightIsOn = true;
  }
  return lightIsOn;
}
