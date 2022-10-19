var year = 1600;

//if year is divisable by 4 and not a century year then its a leap year
if(year % 4 == 0 && year % 100 != 0){
    console.log("The year " + year + " is a leap year in the gregorian calendar!");
}
//if year is divisable by 4 and century year is divisable by 400 then its a leap year
if(year % 4 == 0 && year % 100 == 0 && year % 400 ==0){
    console.log("The year " + year + " is a leap year in the gregorian calendar!");
}
//if year is not divisable by 4 it is not a leap year
else if (year % 4 != 0){
    console.log("The year " + year + " is not a leap year in the gregorian calendar!");
}
