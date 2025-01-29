const input = document.getElementById('input');
const submitButton = document.querySelector('input[type="submit"]');
const colorPicker = document.querySelector('input[type="color"]');

let p = document.createElement('p');
let userName = localStorage.getItem("userName") || "Guest";
p.textContent = 'Your name is: ' + userName;
document.body.appendChild(p);

let points = parseInt(localStorage.getItem("points")) || 0;
let level = parseInt(localStorage.getItem("level")) || 1;

let p1 = document.createElement('p');
p1.textContent = "Your points: " + points;
document.body.appendChild(p1);

let p2 = document.createElement('p');
p2.textContent = "Current level: " + getLevelName(level);
document.body.appendChild(p2);

function getLevelName(level) {
    return level === 1 ? "Easy" : level === 2 ? "Medium" : "Hard";
}

function generateRandomNumber(level) {
    if (level === 1) return Math.floor(Math.random() * 4);
    if (level === 2) return Math.floor(Math.random() * 10);
    if (level === 3) return Math.floor(Math.random() * 20);
}

function updateDisplay() {
    p1.textContent = "Your points: " + points;
    p2.textContent = "Current level: " + getLevelName(level);
}

function numberGuesserGame() {
    let number = generateRandomNumber(level);

    if (parseInt(input.value) === number) {
        points += 1;

        if (level === 1 && points >= 5) {
            level = 2;
            alert("Congratulations! You've reached the Medium level!");
        } 
        else if (level === 2 && points >= 10) {
            level = 3;
            alert("Awesome! You're now on the Hard level!");
        } 
        else if (level === 3 && points >= 15) {
            alert("You're a pro! You've mastered the game!");
        }

        localStorage.setItem("points", points);
        localStorage.setItem("level", level);
        updateDisplay();
    }
    else {
        alert("Wrong guess! Try again.");
    }
}

submitButton.addEventListener('click', numberGuesserGame);

colorPicker.addEventListener('input', function(event) {
    document.body.style.backgroundColor = event.target.value;
});
