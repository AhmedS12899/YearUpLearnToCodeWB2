var vanSeats = 15;
var vanCost = 250;
var people = 38;

var vanNeeded = Math.ceil(people/vanSeats);
var vanTotal = vanNeeded * vanCost;
var costPer = (vanTotal / people).toFixed(2);

console.log("if we have " + people + " people, we would need to rent " +vanNeeded + ". This would cost each person $" + costPer);
console.log("We would have collected $" + vanTotal + " total");

