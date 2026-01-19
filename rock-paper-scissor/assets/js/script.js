let computerScore = 0;
let playerScore = 0;
function compMove() {
    const compValue = Math.random();
    if (compValue >= 0 && compValue < (1/3)) {
        return "rock";
    } else if (compValue >= (1/3) && compValue < (2/3)) {
        return "paper";
    } else {
        return "scissor";
    }
}

function play(playerMove) {
    const computerMove = compMove();

    if ((playerMove == 'rock' && computerMove == 'scissor') || (playerMove == 'paper' && computerMove == 'rock') || (playerMove == 'scissor' && computerMove == 'paper')) {
        alert('Computer pick ' + computerMove + ' You Win!');
        playerScore++;
    } else if ((playerMove == 'rock' && computerMove == 'rock') || (playerMove == 'paper' && computerMove == 'paper') || (playerMove == 'scissor' && computerMove == 'scissor')) {
        alert('Computer pick ' + computerMove + ' Draw!');
    } else {
        alert('Computer pick ' + computerMove + ' Computer Win!');
        computerScore++;
    }

    document.getElementById("score").innerHTML = 'Player: ' + playerScore + ' Computer: ' + computerScore;
}

document.getElementById("rock").addEventListener("click", () => play("rock"));
document.getElementById("paper").addEventListener("click", () => play("paper"));
document.getElementById("scissor").addEventListener("click", () => play("scissor"));
