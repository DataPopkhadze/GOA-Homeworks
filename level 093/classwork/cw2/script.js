const counterDisplay = document.getElementById("counter");
const stepInput = document.getElementById("step");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const resetButton = document.getElementById("reset");

let counter = 0;
let resetCount = 0;

function updateCounter(value) {
    if (value < -100 || value > 100) {
        alert("Cannot add or subtract more than 100.");
        return;
    }
    counter += value;
    counterDisplay.textContent = counter;
}

addButton.addEventListener("click", () => {
    const step = parseInt(stepInput.value) || 0;
    updateCounter(step);
});

subtractButton.addEventListener("click", () => {
    const step = parseInt(stepInput.value) || 0;
    updateCounter(-step);
});

resetButton.addEventListener("click", () => {
    if (resetCount >= 1) {
        alert("Cannot reset more than once.");
        return;
    }
    counter = 0;
    resetCount++;
    counterDisplay.textContent = counter;
});
