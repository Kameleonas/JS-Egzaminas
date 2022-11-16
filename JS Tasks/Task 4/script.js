/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const result = {};

// crate Cards and fill in with data from cars.json
function getCardData(array) {
  const outputField = document.getElementById("output");
  // create card for each object in given array
  array.forEach((element) => {
    const newCard = document.createElement("div");
    const brand = document.createElement("h4");
    const models = document.createElement("p");
    brand.innerText = `Brand - ${element.brand}`;
    models.innerHTML = `<b>Available models:</b></br> ${element.models}`;

    outputField.appendChild(newCard);
    newCard.append(brand, models);

    // styiling cards
    outputField.style.display = "flex";
    outputField.style.justifyContent = "space-around";
    outputField.style.flexWrap = "wrap";
    outputField.style.marginTop = "5vh";

    newCard.style.minWidth = "200px";
    newCard.style.maxWidth = "30vw";
    newCard.style.border = "2px solid #CCC";
    newCard.style.margin = "10px";
    newCard.style.padding = "10px";

    newCard.style.overflowWrap = "break-word";
  });
}

// get car list on load / handle request to cars.json
async function createList() {
  try {
    let response = await fetch(ENDPOINT);
    if (response.ok) {
      result.values = await response.json();
      getCardData(result.values);
    }
  } catch (error) {
    console.log(error);
  }
}
createList();
