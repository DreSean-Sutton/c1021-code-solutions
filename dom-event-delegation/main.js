var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', eventCallback);

function eventCallback(event) {
  console.log('Event.targetResult:', event.target);
  console.log('event.target.tagNameResult:', event.target.tagName);
  if (event.target && event.target.tagName === 'BUTTON') {
    var closestParent = event.target.closest('li');
    console.log('Parent Of List\'s:', closestParent);
    closestParent.remove();
  }
}
