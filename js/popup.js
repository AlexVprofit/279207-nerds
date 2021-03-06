var popBtn = document.querySelector(".btn-pop-up");
var popUp = document.querySelector(".pop-up");
var popClose = document.querySelector(".close");
var form = popUp.querySelector("form");
var login = popUp.querySelector("[name=name]");
var email = popUp.querySelector("[name=email]");
var letter = popUp.querySelector("[name=text-letter]");
var storageLogin = localStorage.getItem("login");
var storageEmail = localStorage.getItem("email");

popBtn.addEventListener("click", function(event){
    event.preventDefault();
    popUp.classList.add("pop-up-opened");
  if (storageLogin) {
    login.value = storageLogin;
    if (storageEmail) {
      email.value = storageEmail;
      letter.focus();
    }
    else {
      email.focus();
    }
  }
  else {
    login.focus();
  }
});

popClose.addEventListener("click", function(event){
  event.preventDefault();
  popUp.classList.remove("pop-up-opened");
  popUp.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
  if (!login.value || !email.value) {
    event.preventDefault();
    popUp.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
    localStorage.setItem("email", email.value);
    popUp.classList.remove("pop-up-opened");
    popUp.classList.remove("modal-error");
  }
});

window.addEventListener("keydown", function(event){
if (event.keyCode == 27) {
if (popUp.classList.contains("pop-up-opened")) {
popUp.classList.remove("pop-up-opened");
popUp.classList.remove("modal-error");
popUp.classList.remove("input-error");
  }
 }
});

