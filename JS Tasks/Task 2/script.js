/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

// select input and output from HTML
const button = document.getElementById("btn__element");
const counter = document.getElementById("btn__state");

// assign output inner text
let counterValue = parseInt(counter.innerText);

// count
button.addEventListener(
  "click",
  () => (counter.innerText = 1 + counterValue++)
);
