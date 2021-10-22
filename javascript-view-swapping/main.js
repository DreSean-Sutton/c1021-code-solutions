// var $tabContainer = document.querySelector('.tab-container');
// var $allTabElements = document.querySelectorAll('.tab');
// var $allViewElements = document.querySelectorAll('.view');

// $tabContainer.addEventListener('click', clickOnTab);

// function clickOnTab(event) {
//   debugger;
//   if (!event.target.matches('.tab')) {
//     return;
//   }
//   for (var tabIndex = 0; tabIndex < $allTabElements.length; tabIndex++) {
//     if ($allTabElements[tabIndex] === event.target) {
//       $allTabElements[tabIndex].className = 'tab active';
//     } else {
//       $allTabElements[tabIndex].className = 'tab';
//     }
//   }
//   var $dataView = event.target.getAttribute('data-view');

//   for (var viewIndex = 0; viewIndex < $allViewElements; viewIndex++) {
//     if ($allViewElements[viewIndex] === $dataView) {
//       $allViewElements.className = 'data-view';
//     } else {
//       $allViewElements[viewIndex].className = 'hidden';
//     }
//   }
// }
