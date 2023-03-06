function myFunction() {
  var x = document.getElementById("psswrdField");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function myFunction1() {
  var x = document.getElementById("cnfPsswrdField");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

var password = document.getElementById("psswrdField")
  , confirm_password = document.getElementById("cnfPsswrdField");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords do not Match!");
  } else {
    confirm_password.setCustomValidity('');
  }
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => input.value = '');
  form.submit();
});