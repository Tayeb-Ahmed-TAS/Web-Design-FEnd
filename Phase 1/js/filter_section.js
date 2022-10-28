let filter_cls_icn = document.querySelector(".filter_full_img span i");

let full_img_div = document.querySelector(".filter_full_img");

let full_img = document.querySelector(".filter_full_img img");

let filter_box = document.querySelectorAll(".filter_img");

// ! for show full size image ;

filter_box.forEach((e) => {
  e.addEventListener("click", () => {
    full_img.src = e.getAttribute("img_src");

    full_img_div.classList.add("show_filter_img");
  });
});

// ! for close full size image by clicking icon ;

// filter_cls_icn.addEventListener("click", () => {
//   full_img_div.classList.remove("show_filter_img");
// });

// ? No need the upper part ;

// ! for close full size image by clicking outside the box ;

// ? It also works for icon ;

document.addEventListener(
  "click",
  (e) => {
    if (e.target.closest(".filter_full_img img")) {
      return;
    } else {
      if (full_img_div.classList.contains("show_filter_img")) {
        full_img_div.classList.remove("show_filter_img");
      }
    }
  },
  true
);

// ! for filter the images ;

let filter_buttons = document.querySelectorAll(".filter_btns li");

let filter_item_boxs = document.querySelectorAll(".filter_box");

for (let i = 0; i < filter_buttons.length; i++) {
  filter_buttons[i].addEventListener("click", () => {
    let crnt_active_filter_btn = document.querySelector(
      ".filter_btns .active_filter"
    );

    crnt_active_filter_btn.classList.remove("active_filter");

    filter_buttons[i].classList.add("active_filter");

    let data_filter = filter_buttons[i].getAttribute("under");

    for (let j = 0; j < filter_item_boxs.length; j++) {
      filter_item_boxs[j].classList.add("filter_hide");

      if (
        filter_item_boxs[j].getAttribute("under") == data_filter ||
        data_filter == "all"
      ) {
        filter_item_boxs[j].classList.remove("filter_hide");
      }
    }
  });
}
