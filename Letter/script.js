let open_btn = document.querySelector(".envelope");
// let open_btn = document.querySelector(".open_btn");
let close_btn = document.querySelector(".close_btn");

open_btn.addEventListener("click", () => {
  document.querySelector(".envelope").classList.toggle("open");
  document.querySelector(".letter").classList.toggle("come_up");
  document.querySelector(".heart").classList.remove("close");
});
