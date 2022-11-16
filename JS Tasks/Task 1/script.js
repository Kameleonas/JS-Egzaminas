/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

// function to convert
function convert(inputValue) {
  // svarai
  const lb = inputValue * 2.2046;
  //gramai
  const g = inputValue / 0.001;
  //uncijos
  const oz = inputValue * 35.274;
  console.log([lb, g, oz]);
  return [lb, g, oz];
}

// lets calculate
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  // lets take input value
  let input = document.getElementById("search").value;

  // change input type to number
  input = parseFloat(input);

  // validate input and execute code
  if (!isNaN(input) && input > 0) {
    displayResult(convert(input));
  } else {
    alert("iveskite teigiamą skaičių..");
  }
});

// display results in output
function displayResult(input) {
  const resultField = document.getElementById("output");

  // reset result field if not empty
  resultField.innerText = "";

  const svarai = document.createElement("p");
  const gramai = document.createElement("p");
  const uncijos = document.createElement("p");

  const [lb, g, oz] = input;

  svarai.innerText = `Result one = ${lb} lb`;
  gramai.innerText = `Result two = ${g} g`;
  uncijos.innerText = `Result three = ${oz} oz`;

  resultField.append(svarai, gramai, uncijos);

  // adding some style to results
  resultField.style.position = "absolute";
  resultField.style.left = "40%";
  resultField.style.height = "15vh";
  resultField.style.width = "fit-content";
  resultField.style.background = "white";
  resultField.style.padding = "2vw";
  resultField.style.display = "flex";
  resultField.style.flexDirection = "column";
  resultField.style.justifyContent = "space-between";
}
