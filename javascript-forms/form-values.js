var $userName = document.querySelector('#user-name');
var $userEmail = document.querySelector('#user-email');
var $userMessage = document.querySelector('#user-message');
var $contactForm = document.querySelector('form');

$contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var allValues = {
    name: $userName.value,
    email: $userEmail.value,
    message: $userMessage.value
  };
  console.log('All Form Values:', allValues);
  $contactForm.reset();
}
