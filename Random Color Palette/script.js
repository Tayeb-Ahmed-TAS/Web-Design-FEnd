let refreshBtn = document.querySelector(".btn");

let color_box = document.querySelector(".color_box");

let maxPaletteBoxes = 32;

let generatePalette = () => {
  color_box.innerHTML = ""; // ? Clearing the ul (color_box)

  // ! 0xffffff === 16777215

  for (let i = 0; i < maxPaletteBoxes; i++) {
    // ? Generating a random hex color code

    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);

    randomHex = `#${randomHex.padStart(6, "0")}`; // ? add # before color code

    // ! padStart() will append 0 after # to ensure that the randomHex string is always 6 characters long

    // ? Creating Dynamic color box

    let color = document.createElement("li");

    color.classList.add("color");

    color.innerHTML = ` <div class="rect_box" style="background:${randomHex}"></div>

                        <span class="hex_value">${randomHex}</span>`;

    color_box.appendChild(color);

    // ? Adding click event to current li element to copy the color

    color.addEventListener("click", () => copyColor(color, randomHex));
  }
};

generatePalette();

let copyColor = (elem, hexVal) => {
  let colorElement = elem.querySelector(".hex_value");

  navigator.clipboard.writeText(hexVal).then(() => {
    colorElement.innerHTML = "copied";

    setTimeout(() => {
      colorElement.innerHTML = hexVal;
    }, 1000);
  });
};

refreshBtn.addEventListener("click", generatePalette); // ? Generate random color on button click
