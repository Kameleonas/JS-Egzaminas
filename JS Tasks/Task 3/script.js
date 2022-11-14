/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const showUsers = document.getElementById("btn");
const outputContainer = document.getElementById("output-cointainer");
const outputField = document.getElementById("output");
// counter for User number in cards
let defaultCounter = 1;

//styling output container
outputField.style.display = "flex";
outputField.style.flexDirection = "column";
outputField.style.flexFlow = "wrap";
outputField.style.justifyContent = "space-around";
outputField.style.overflowWrap = "break-word";

// fetch data from API
fetch(ENDPOINT)
  .then((response) => response.json())
  .then((result) =>
    showUsers.addEventListener("click", () => createNewCard(result))
  )
  .catch((error) => console.log(error));

// create card with info from API
function createNewCard(result) {
  // reset output content
  outputField.innerText = "";

  // creating cards
  result.forEach((element) => {
    const newCard = document.createElement("div");
    const userNum = document.createElement("p");
    const login = document.createElement("p");
    const avatar_url = document.createElement("p");

    userNum.innerText = `User number ${defaultCounter++}`;
    login.innerText = `login: ${element.login}`;
    avatar_url.innerText = `avatar_url: ${element.avatar_url}`;

    outputField.append(newCard);
    newCard.append(userNum, login, avatar_url);

    //styling
    userNum.style.fontWeight = "800";
    userNum.style.lineHeight = "2em";

    newCard.style.maxWidth = "23vw";
    newCard.style.padding = "10px";
    newCard.style.margin = "1vh 1vw";
    newCard.style.border = "1px solid #708090";
    newCard.style.borderRadius = "10px";
    newCard.style.textAlign = "center";
  });
}
