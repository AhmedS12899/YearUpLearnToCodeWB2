"use strict";

window.onload = init;

function init(){
    const helloBtn = document.getElementById("btn");
    helloBtn.onclick = greetUser;
}
function greetUser(){
    const nameInput = document.getElementById("nameInput").value;
    alert("Hello " + nameInput);

}