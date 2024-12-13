const myIncrease = document.getElementById('myIncrease');
const myDecrease = document.getElementById('myDecrease');
const myReset = document.getElementById('myReset');
const myCount = document.getElementById('myP');
let count = 0;

function updateColor() {
    if (count < 0) {
        document.body.style.backgroundColor = "red";
    } 
    else if (count > 0) {
        document.body.style.backgroundColor = "green";
    } 
    else {
        document.body.style.backgroundColor = "white";
    }
}

myIncrease.onclick = function () {
    count++;
    myCount.textContent = count;
    updateColor();          
};

myDecrease.onclick = function () {
    count--;
    myCount.textContent = count;
    updateColor();
};

myReset.onclick = function () {
    count = 0;
    myCount.textContent = count;
    updateColor();
};
