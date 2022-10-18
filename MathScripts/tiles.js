var length = 30;
var width = 70;

var boxesNeeded = Math.ceil(Math.max(length, width)/12) ;

var boxMore = Math.ceil(boxesNeeded*1.1);

console.log("The amount of boxes need for a room that is " + length + "x" + width + " is : " + boxesNeeded);
console.log("If we buy 10% more we will need to buy: " + boxMore + " boxes");
