let user_name = document.querySelector(".userName");

let password = document.querySelector(".passWord");

let button = document.querySelector(".btn");

button.disabled = true;

password.addEventListener("keyup", () => {
  if (user_name.value == "" && password.value == "") {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
});
