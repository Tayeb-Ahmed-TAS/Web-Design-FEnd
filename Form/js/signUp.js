// todo: Input type number maxlength Start ;

let cardNumber = document.querySelector(".cardNumber");

let cvcNumber = document.querySelector(".cvcNumber");

let day = document.querySelector(".day");

let month = document.querySelector(".month");

let year = document.querySelector(".year");

cardNumber.addEventListener("input", (e) => {
  e.target.value = e.target.value.slice(0, 16);
});

cvcNumber.addEventListener("input", (e) => {
  e.target.value = e.target.value.slice(0, 3);
});

day.addEventListener("input", (e) => {
  e.target.value = e.target.value.slice(0, 2);
});

month.addEventListener("input", (e) => {
  e.target.value = e.target.value.slice(0, 02);
});

year.addEventListener("input", (e) => {
  e.target.value = e.target.value.slice(0, 4);
});

// todo: Input type number maxlength End ;

// todo: Enable and Disable Button End ;

let checkBox = document.querySelector(".checkBox");

let checkText = document.querySelector("#check");

let button = document.querySelector(".btn");

button.disabled = true;

checkBox.addEventListener("click", () => {
  checkBox.checked === true
    ? (button.disabled = false)
    : (button.disabled = true);
});

button.addEventListener("click", () => {
  if (
    day.value.length != 0 &&
    month.value.length != 0 &&
    year.value.length != 0
  ) {
    if (
      day.value <= 0 ||
      day.value > 31 ||
      month.value > 12 ||
      month.value <= 0 ||
      year.value.length < 4 ||
      year.value.length > 4 ||
      year.value > new Date().getFullYear()
    ) {
      button.disabled = true;

      checkBox.checked = false;

      alert("Your Date of Birth is not valid !!!");
    }
  } else {
    location.href = "signUpSuccess.html";
  }
});

// todo: Enable and Disable Button End ;
