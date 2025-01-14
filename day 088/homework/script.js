const myScoreP = document.getElementById('myScore');
const compScoreP = document.getElementById('compScore');
const btnsDiv = document.getElementById('btns');
const winsP = document.getElementById('wins');
const compChoiceP = document.getElementById('compChoice');  
const choices = ['rock', 'paper', 'scissors'];

let myScore = 0;
let compScore = 0;

btnsDiv.addEventListener('click', function(e) {
    const btnId = e.target.id;
    
    const compChoice = choices[Math.floor(Math.random() * choices.length)];

    compChoiceP.textContent = `Computer chose: ${compChoice}`;  

    if (btnId === compChoice) {
        winsP.style.color = 'purple';
        winsP.textContent = 'It\'s a tie!';
    } 
    else if (
        (btnId === 'rock' && compChoice === 'paper') ||
        (btnId === 'scissors' && compChoice === 'rock') ||
        (btnId === 'paper' && compChoice === 'scissors')
    ) {
        compScore++;
        compScoreP.textContent = "Computer's score is: " + compScore;
        winsP.style.color = 'red';
        winsP.textContent = 'You lost!';
    } 
    else {
        myScore++;
        myScoreP.textContent = "My score is:" + myScore;
        winsP.style.color = 'green';
        winsP.textContent = 'You won!';
    }
});
