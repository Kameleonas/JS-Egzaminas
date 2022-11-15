/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

// Constructor Calculator function
function Calculator(a, b) {
  this.a = a;
  this.b = b;
  this.newResultsObject = {
    sum: this.a + this.b,
    subtraction: this.a - this.b,
    multiplication: this.a * this.b,
    division: this.a / this.b,
  };
}

const resultone = new Calculator(50, 5);
console.log(resultone.newResultsObject);
