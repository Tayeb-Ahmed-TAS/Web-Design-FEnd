let scrollProgress = document.querySelector(".progress");

window.addEventListener("scroll", function() {

    scrollProgress.classList.toggle("go_top", window.scrollY > 200);

});

scrollProgress.addEventListener("click", () => {

    document.documentElement.scrollTop = 0;

});
