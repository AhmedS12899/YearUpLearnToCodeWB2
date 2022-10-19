// Mortgage Calc Formulas

var principal = 53000;
var years = 15;
var interest = 0.07625/12;
// M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1] - monthly payment
var monthly = (principal * ( interest*Math.pow((1+interest), 12*years) ) / ( Math.pow( (1+interest), (12*years)) -1 ));
var totalInterest = 0;
var principalTotal = principal;
var monthlyInterest = 0;
console.log("Monthly Payment is :"  + monthly.toFixed(2));

//Total Interest calculation
for(let i = years*12; i>0 ;i--){
    monthlyInterest = (principalTotal * interest);
    totalInterest += monthlyInterest;
    principalTotal = (principalTotal - (monthly - monthlyInterest));
}
console.log("Total Interest is : " + totalInterest.toFixed(2));
