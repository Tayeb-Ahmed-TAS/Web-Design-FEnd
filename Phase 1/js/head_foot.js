// Todo : Submenu ;

let mainSub = document.querySelector(".sub1");

let mainSubIcn = document.querySelector(".sub1 .fa-chevron-down");

let mainSub2 = document.querySelector(".sub2");

let mainSubIcn2 = document.querySelector(".sub2 .fa-chevron-down");

let mainSub3 = document.querySelector(".sub3");

let mainSubIcn3 = document.querySelector(".sub3 .fa-chevron-right");

mainSub.addEventListener("click", () => {
  document.querySelector(".submenu_blog").classList.toggle("sub_show");

  mainSubIcn.classList.toggle("rotate");
});

mainSub2.addEventListener("click", () => {
  document.querySelector(".submenu_pages").classList.toggle("sub_show");

  mainSubIcn2.classList.toggle("rotate");
});

mainSub3.addEventListener("click", () => {
  document.querySelector(".submenu_level2").classList.toggle("sub_show");

  mainSubIcn3.classList.toggle("rotate2");
});

// Todo : Open and Close nav bar ;

let opn_cls_btn = document.querySelector(".nav-control input");

let nav_bar = document.querySelector(".navLinks");

opn_cls_btn.addEventListener("click", () => {
  nav_bar.classList.toggle("show_nav");
});

// ! Close navbar clicking outside the box ;

// document.addEventListener(
//   "click",
//   (e) => {
//     if (e.target.closest(".navLinks")) {
//       return;
//     } else {
//       if (nav_bar.classList.contains("show_nav")) {
//         nav_bar.classList.remove("show_nav");
//       }
//     }
//   },
//   true
// );

// Todo : Sticky Navigation ;

window.addEventListener("scroll", () => {
  document
    .querySelector("header")
    .classList.toggle("sticky", window.scrollY > 0);
});

// todo: Footer Copyright Year ;

let copyright_year = document.querySelector(".copyright_year");

copyright_year.innerHTML = new Date().getFullYear();
