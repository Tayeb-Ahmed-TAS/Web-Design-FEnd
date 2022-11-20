// todo:Submenu Close / Open

let subMenu_parent = document.querySelector(".subMenu_parent a"),
  subMenu_parent_icon = document.querySelector(".subMenu_parent i"),
  subMenu = document.querySelector(".subMenu");

subMenu_parent.addEventListener("click", () => {
  subMenu.classList.toggle("open_sub");

  subMenu.classList.contains("open_sub")
    ? subMenu_parent_icon.classList.replace("fa-plus", "fa-minus")
    : subMenu_parent_icon.classList.replace("fa-minus", "fa-plus");
});

// todo: Navigation Open / Close

let switch_nav = document.querySelector(".switch_nav i"),
  nav = document.querySelector(".navigation");

switch_nav.addEventListener("click", () => {
  nav.classList.toggle("show_nav");
});

// Todo : Sticky Navigation ;

window.addEventListener("scroll", () => {
  document.querySelector("header").classList.toggle("sticky", window.scrollY > 100);
});
