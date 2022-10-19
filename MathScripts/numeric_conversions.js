// Description: This script tests various numeric 
//conversion techniques
// Author: Jordan Q. Newprogrammer

var a = +"  101.1   ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5   "; 

console.log("a: " + parseInt(a) + " b: " + parseInt(b) + " c: " + parseInt(c) + " d: " + parseInt(d));

console.log("a: " + parseFloat(a) + " b: " + parseFloat(b) + " c: " + parseFloat(c) + " d: " + parseFloat(d));

console.log("a: " + Number(a) + " b: " + Number(b) + " c: " + Number(c) + " d: " + Number(d));


console.log("a: " + (+a) + " b: " + (+b) + " c: " + (+c) + " d: " + (+d));
