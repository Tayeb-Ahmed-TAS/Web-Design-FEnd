let btn = document.querySelector(".btn");

btn.disabled = false;

// ? Google drive link

let fileLink =
  "https://drive.google.com/uc?export=download&id=1XHEYPWDLU5rfMzMoNiFjwpJKQGI37MfY";

// ! If you want to give your Google Drive link there then you can replace this “1XHEYPWD…” ID with your file ID. To get a file ID, upload your file on Google Drive > Right Click on the File > Click Share > Update General Access to “Anyone with the link” > Click Copy Link > Paste it on the notepad. In this link, you’ll get the file ID. The URL looks like this: https://drive.google.com/file/d/FILE-ID/view?usp=sharing

btn.addEventListener("click", () => {
  if (btn.classList.contains("disable_timer")) {
    return (location.href = fileLink);
  }

  timer = 30;

  btn.classList.add("timer");

  btn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;

  let initCount = setInterval(() => {
    if (timer > 0) {
      timer--;

      return (btn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`);
    }

    clearInterval(initCount);

    btn.disabled = true;

    location.href = fileLink;

    btn.textContent = "Your file is downloading...";

    setTimeout(() => {
      btn.classList.replace("timer", "disable_timer");

      btn.disabled = false;

      btn.innerHTML = `<span class="icon"><i class="fa-light fa-arrow-down-to-line"></i></span>
  <span class="text">download again</span>`;
    }, 3000);
  }, 1000);
});
