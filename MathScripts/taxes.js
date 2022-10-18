var fTax = 0.23;
var income = 100000;

var taxed = income/12 * fTax;
console.log("If you make $" + income + " you pay $" + taxed.toFixed(2) + " in taxes every month");