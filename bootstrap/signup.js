let fullName = document.getElementById("name");
let email = document.getElementById("email");
let confirmEmail = document.getElementById("confirmEmail");
let phone = document.getElementById("phone");
let pass = document.getElementById("pass");
let confirmPass = document.getElementById("confirmPass");
let male = document.getElementById("male");
let female = document.getElementById("female");

let submit = document.querySelector(".sign-submit");
submit.addEventListener("click", function () {
  if (fullName.value.length == 0) {
    alert("Please enter your name!");
  } else if (email.value.length == 0) {
    alert("Please enter your email!");
  } else if (confirmEmail.value.length == 0) {
    alert("Please confirm your email!");
  } else if (email.value != confirmEmail.value) {
    alert("Email doesn't match! please correct your email!");
  } else if (phone.value.length == 0) {
    alert("Please enter your phone number!");
  } else if (phone.value.length < 9) {
    alert("Phone number must be atleast 10 digits long!");
  } else if (isNaN(parseInt(phone.value))) {
    alert("Invalid phone number!");
  } else if (pass.value.length == 0) {
    alert("Please enter your password!");
  } else if (pass.value.length < 8) {
    alert("password must be atleast 8 characters!");
  } else if (confirmPass.value.length == 0) {
    alert("Please confirm your password!");
  } else if (pass.value != confirmPass.value) {
    alert("Password doesn't match!");
  } else if (!male.checked && !female.checked) {
    alert("Please choose your gender");
  } else {
    alert("registration successful");
    setTimeout(function () {
      window.open("login.html", "_self");
    }, 1000);
  }
});
