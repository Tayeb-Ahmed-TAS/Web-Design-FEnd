let music_icon = document.querySelector(".music_btn"),
  audio_wave = document.querySelector(".audio_wave"),
  audio = document.querySelector(".music audio");

music_icon.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();

    music_icon.src = "img/pause.png";

    audio_wave.src = "img/audio_wave.gif";
  } else {
    audio.pause();

    music_icon.src = "img/play.png";

    audio_wave.src = "img/audio_wave.png";
  }
});
