var payRate;
var hoursWorked = 45;
var grossPay;
var reason;

//pay when hours are 40 or less
if (hoursWorked < 40) {
    payRate = 12.50;
    grossPay = hoursWorked * payRate;
    reason = "Under 40 hours";
}
//pay when hours worked are exactly 40 hours
if (hoursWorked == 40) {
    payRate = 25.00;
    grossPay = hoursWorked * payRate;
    reason = "Exactly 40 hours"
    }
//when hours are above 40
else {
    payRate = 17.30;
    overtimeHours = hoursWorked - 40;
    grossPay = (40 * payRate) + (overtimeHours*1.5*payRate);
    reason = "Over 40 hours";
}

console.log("Pay rate: " + payRate.toFixed(2) + " , hours worked: " + hoursWorked  + " , Gross Pay: " + grossPay.toFixed(2) + " , Reason: " + reason);



