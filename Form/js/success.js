let n = 5000;

let n2 = n / 1000;

window.addEventListener("load", () => {
  setInterval(() => {
    n2 = n2 - 1;
    if (n2 >= 0) {
      document.querySelector(".timer").innerText = n2;
    }
  }, 1000);

    setInterval(() => {
      location.href = "login.html";
    }, 5000);
});
