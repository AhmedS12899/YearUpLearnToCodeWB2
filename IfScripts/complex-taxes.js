var annualIncome = 100000;
var hoursWeekly = 40;
var filingStatus = "single";
var taxRate;

//producies tax rate if you file single based on income
if (filingStatus == "single") {
    if (annualIncome < 12000) taxRate = 0.05;
    else if (annualIncome >= 12000 && annualIncome < 25000) taxRate = 0.10;
    else if (annualIncome >= 25000 && annualIncome < 75000) taxRate = 0.15;
    else taxRate = 0.2;
}

//produces tax rate if you file joint based on income
if (filingStatus == "joint") {
    if (annualIncome < 12000) taxRate = 0.0;
    else if (annualIncome >= 12000 && annualIncome < 25000) taxRate = 0.06;
    else if (annualIncome >= 25000 && annualIncome < 75000) taxRate = 0.11;
    else taxRate = 0.2;
}
var grossPay = annualIncome / 52;
var perHour = grossPay / hoursWeekly;
var taxWithholdings = grossPay * taxRate;
var netPay = grossPay - taxWithholdings;
console.log("You worked " + hoursWeekly + " hours this period");
console.log("Because you earn $" + perHour.toFixed(2) + " per hour, your gross pay is $" + grossPay.toFixed(2));
console.log("Your filing status is " + filingStatus);
console.log("Your tax withholdings this period is $" + taxWithholdings.toFixed(2));
console.log("Your net pay is $" + netPay.toFixed(2));