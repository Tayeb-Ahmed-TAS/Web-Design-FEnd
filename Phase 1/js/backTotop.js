let calcScrollValue = () => {
  let scrollProgress = document.querySelector(".progress");

  let progressValue = document.querySelector(".progress-value");

  let pos = document.documentElement.scrollTop;

  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrollValue = Math.round((pos * 100) / calcHeight);

  pos > 150
    ? scrollProgress.classList.add("go_top")
    : scrollProgress.classList.remove("go_top");

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#8490ff ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;

window.onload = calcScrollValue;
