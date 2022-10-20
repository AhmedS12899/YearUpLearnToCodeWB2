"user strict";
window.onload = init;

function init() {
    const helloBtn = document.getElementById("helloBtn");
    helloBtn.onclick = onHelloBtnClicked;
}
function onHelloBtnClicked(){
    alert("Hi there!");
    const para = document.getElementById("thePara");
    para.innerHTML = "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum";
}

