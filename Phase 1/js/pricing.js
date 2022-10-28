let single_ques = document.querySelectorAll(".single_ques"),
  ques_heading = document.querySelectorAll(".ques_heading h5"),
  ques_heading_icon = document.querySelectorAll(".ques_heading h5 i"),
  ques_ans = document.querySelectorAll(".ques_ans");

for (let i = 0; i < single_ques.length; i++) {
  ques_heading[i].addEventListener("click", () => {
    let accordion_now = document.querySelector(".single_ques.accordion_active");

    accordion_now.classList.remove("accordion_active");

    single_ques[i].classList.add("accordion_active");
  });
}
