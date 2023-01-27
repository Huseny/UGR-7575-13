let email = document.getElementById("emailField");
let regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

let log_btn = document.querySelector(".log-in-submit");
log_btn.addEventListener("click", function () {
  if (isValidEmail()) {
    window.open("profile.html", "_blank");
  } else {
    alert("Invalid email address");
    email.focus
  }
});

function isValidEmail() {
  return regexEmail.test(email.value)
}
