let timerDate = new Date("Jan 25,2024 20:00:00").getTime();

let tD = document.querySelector(".td span");

let tH = document.querySelector(".th span");

let tM = document.querySelector(".tm span");

let tS = document.querySelector(".ts span");

function timer() {
  let now = new Date().getTime();

  gap = timerDate - now;

  let tSec = 1000;
  let tMin = tSec * 60;
  let tHour = tMin * 60;
  let tDay = tHour * 24;

  let da = Math.floor(gap / tDay);

  let hr = Math.floor((gap % tDay) / tHour);

  let mn = Math.floor((gap % tHour) / tMin);

  let sc = Math.floor((gap % tMin) / tSec);

  // ! if (0-9) add 0 in front;

  da = da < 10 ? "0" + da : da;

  hr = hr < 10 ? "0" + hr : hr;

  mn = mn < 10 ? "0" + mn : mn;

  sc = sc < 10 ? "0" + sc : sc;

  tD.innerHTML = da;

  tH.innerHTML = hr;

  tM.innerHTML = mn;

  tS.innerHTML = sc;

  if (timerDate <= now) {
    tD.innerHTML = "00";

    tH.innerHTML = "00";

    tM.innerHTML = "00";

    tS.innerHTML = "00";
  }
}

setInterval(function () {
  timer();
}, 1000);
