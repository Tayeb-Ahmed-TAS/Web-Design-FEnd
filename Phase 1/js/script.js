let section = document.querySelector("#sec3");

let counters = document.querySelectorAll(".counter_box h1");

let started = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > section.offsetTop) {
    if (!started) {
      counters.forEach((num) => startCount(num));
    }

    started = true;
  }
});

let startCount = (e) => {
  let goal = e.getAttribute("m-val");

  let speed = 1000 / goal;

  let count = setInterval(() => {
    e.textContent++;

    if (e.textContent == goal) {
      clearInterval(count);
    }
  }, speed);
};
