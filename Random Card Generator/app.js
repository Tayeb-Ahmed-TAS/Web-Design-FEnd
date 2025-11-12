let generate_btn = document.querySelector("#getCards"),
  select = document.querySelector("#cardCount"),
  card_holder = document.querySelector(".card_holder");
url = "https://fakerapi.it/api/v2/creditCards?_quantity=";

generate_btn.addEventListener("click", async () => {
  let quantity = select.value;

  if (quantity == -1) {
    return;
  }

  let cardArr = await getCardInfo(quantity);

  showData(cardArr);
});

function showData(cardArr) {
  card_holder.innerText = "";

  for (col of cardArr) {
    let card_div = document.createElement("div");
    card_div.classList.add("card");

    let card_left_div = document.createElement("div");
    card_left_div.classList.add("card_left");

    let card_right_div = document.createElement("div");
    card_right_div.classList.add("card_right");

    card_left_div.appendChild(createName(col));
    card_left_div.appendChild(createCardNumber(col));

    card_right_div.appendChild(createCardType(col));
    card_right_div.appendChild(createValid(col));

    card_div.appendChild(card_left_div);
    card_div.appendChild(card_right_div);

    card_holder.appendChild(card_div);
  }
}

function createName(col) {
  let name_div = document.createElement("div");
  name_div.classList.add("name");
  let p = document.createElement("p");
  let h3 = document.createElement("h3");

  p.innerText = "Name";
  h3.innerText = col.owner;

  name_div.appendChild(p);
  name_div.appendChild(h3);

  return name_div;
}

function createCardNumber(col) {
  let card_div = document.createElement("div");
  card_div.classList.add("card_number");
  let p = document.createElement("p");
  let h3 = document.createElement("h3");

  p.innerText = "Card Number";
  // format card number as XXXX-XXXX-XXXX-XXXX
  col.number = col.number
    .toString()
    .match(/.{1,4}/g)
    .join(" ");
  h3.innerText = col.number;

  card_div.appendChild(p);
  card_div.appendChild(h3);

  return card_div;
}

function createValid(col) {
  let valid_div = document.createElement("div");
  valid_div.classList.add("valid");
  let p = document.createElement("p");
  let h3 = document.createElement("h3");

  p.innerText = "Valid";
  h3.innerText = col.expiration;

  valid_div.appendChild(p);
  valid_div.appendChild(h3);

  return valid_div;
}

function createCardType(col) {
  let type_div = document.createElement("div");
  type_div.classList.add("card_type");
  let img = document.createElement("img");

  let img_name = col.type;

  img.setAttribute("src", `img/${img_name}.png`);

  type_div.appendChild(img);

  return type_div;
}

async function getCardInfo(quantity) {
  try {
    let res = await axios.get(url + quantity);
    return res.data.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}
