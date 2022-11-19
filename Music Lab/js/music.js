let music_icon = document.querySelector(".music img"),
  audio = document.querySelector(".music audio");

music_icon.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();

    music_icon.src = "img/pause.png";
  } else {
    audio.pause();

    music_icon.src = "img/play.png";
  }
});
