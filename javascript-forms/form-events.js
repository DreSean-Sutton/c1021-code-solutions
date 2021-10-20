
var $userName = document.querySelector('#user-name');
var $userEmail = document.querySelector('#user-email');
var $userMessage = document.querySelector('#user-message');

$userName.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);

function handleFocus(event) {
  console.log('Focus event:', focus);
  console.log('Focus event.target.name result:', event.target.name);
}

function handleBlur(event) {
  console.log('Blur event:', blur);
  console.log('Blur event.target.name result:', event.target.name);
}
function handleInput(event) {
  console.log('Input event.target.name result:;', event.target.name);
  console.log('input event.target.value result', event.target.value);
}
