
var earthBelow = setInterval(countdown, 2000);
var $firstH1 = document.querySelector('h1');
function countdown(amount) {
  $firstH1.textContent--;
  if ($firstH1.textContent <= -1) {
    $firstH1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(earthBelow);
  }
}
