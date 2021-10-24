var $pageButton = document.querySelector('#page-button');
var $displayNone = document.querySelector('#display-none');
var $modalButton = document.querySelector('#modal-button');
var $overlay = document.querySelector('#overlay');
var onMainPage = true;
$modalButton.addEventListener('click', clickModalbutton);
$pageButton.addEventListener('click', clickMainPageButton);

function clickMainPageButton(event) {
  if (onMainPage) {
    $displayNone.className = '';
    $overlay.className = 'overlay';
    onMainPage = false;
  }
}

function clickModalbutton(event) {
  if (onMainPage === false) {
    $displayNone.className = 'display-none';
    $overlay.className = '';
    onMainPage = true;
  }
}
