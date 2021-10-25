var $tabContainer = document.querySelector('.tab-container');
var $allTabElements = document.querySelectorAll('.tab');
var $allViewElements = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', clickOnTab);

function clickOnTab(event) {
  if (!event.target.matches('.tab')) {
    return;
  }
  for (var tabIndex = 0; tabIndex < $allTabElements.length; tabIndex++) {
    if ($allTabElements[tabIndex] === event.target) {
      $allTabElements[tabIndex].className = 'tab active';
    } else {
      $allTabElements[tabIndex].className = 'tab';
    }
  }
  var $dataView = event.target.getAttribute('data-view');

  for (var viewIndex = 0; viewIndex < $allViewElements.length; viewIndex++) {
    if ($allViewElements[viewIndex].getAttribute('data-view') !== $dataView) {
      $allViewElements[viewIndex].className = 'view hidden';
    } else {
      $allViewElements[viewIndex].className = 'view';
    }
  }
}
