var a = 1;
var b = 9;
var c = 2;
//if all the numbers are the same
if(a == b == c ){
    console.log(a + "\t" + b + "\t" + c);
}
//if first number is the least
else if (a <= b && a <= c) {
    if (b <= c) {
        console.log(a + "\t" + b + "\t" + c);
    }
    else{
        console.log(a + "\t" + c + "\t" + b);
    }
}
//if second number is the least
else if (b <= a && b <= c) {
    if (a <= c) {
        console.log(b + "\t" + a + "\t" + c);
    }
    else{
        console.log(b + "\t" + c + "\t" + a);
    }
}
//if third number is the least
else if (c <= a && c <= b) {
    if (a <= b) {
        console.log(c + "\t" + a + "\t" + b);
    }
    else{
        console.log(c + "\t" + b + "\t" + a);
    }
}