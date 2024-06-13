function getRandomSelection() {
    const list = ["Rock", "Paper", "Scissors"];
    const selectRandom = Math.floor(Math.random() * list.length);

    return list[selectRandom];
}

function playerHasWon (player, computer) {
    return (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
    );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResult (userOption) {
    const computerChoice = getRandomSelection();

    if (playerHasWon(userOption, computerChoice)) {
        playerScore++;
        return `Player wins! ${userOption} beats ${computerChoice}`;
    } else if (userOption === computerChoice) {
        return `It's a tie! Both chose ${userOption}`;
    } else {
        computerScore++;
        return `Computer wins! ${computerChoice} beats ${userOption}`;
    }
}

const displayPlayerScore = document.getElementById('player-score');
const displayComputerScore = document.getElementById('computer-score');
const optionDiv = document.getElementById('choose');
const roundResult = document.getElementById('round-result');
const finalResult = document.getElementById('display-result');


function showResult(userOption) {
    roundResult.innerHTML = getRoundResult(userOption);
    displayPlayerScore.innerHTML = playerScore;
    displayComputerScore.innerHTML = computerScore;

    if (playerScore === 3 || computerScore === 3) {
        finalResult.innerText = `${playerScore === 3 ? "Player" : "Computer" } has won the game!`;

    resetButton.classList.remove('hidden');
    optionDiv.style.display = "none";
    }
}

function restartButton () {
    playerScore = 0;
    computerScore = 0;
    displayPlayerScore.innerText = playerScore;
    displayComputerScore.innerText = computerScore;
    resetButton.classList.add('hidden');
    optionDiv.style.display = "block"
    finalResult.innerText = '';
    roundResult.innerText = '';
    return;
}

const rockButton = document.getElementById('rock-btn');
const paperButton = document.getElementById('paper-btn');
const scissorsButton = document.getElementById('scissors-btn');
const resetButton = document.getElementById('reset-btn');

rockButton.addEventListener('click', function() {
    showResult("Rock")
});
paperButton.addEventListener('click', function() {
    showResult("Paper")
});
scissorsButton.addEventListener('click', function() {
    showResult("Scissors")
});

resetButton.addEventListener('click', function() {
    restartButton();
});

