setTimeout(helloThere, 2000);

function helloThere() {
  var $helloThere = document.querySelector('h1');
  $helloThere.textContent = 'Hello There';
}
