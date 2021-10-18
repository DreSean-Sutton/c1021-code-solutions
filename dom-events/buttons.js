function handleClick(event) {
  console.log('button clicked');
  console.log('event object:', event);
  console.log('TargetResult:', event.target);
}

var $buttonClick = document.querySelector('.click-button');
$buttonClick.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('eventResult:', event);
  console.log('targetResult', event.target);
}

var $mouseOver = document.querySelector('.hover-button');
$mouseOver.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('eventResult:', event);
  console.log('eventTargetResult:', event.target);
}
var $doubleClickButton = document.querySelector('.double-click-button');
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
