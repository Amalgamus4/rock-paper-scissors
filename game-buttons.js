let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;
let scoreArea = document.getElementById('scoreArea');

updateScoreArea();

function updateScoreArea() {
  scoreArea.textContent = `Player score: ${playerScore}   Computer score: ${computerScore}`;
}

function computerPlay() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random()*choices.length)];
}



let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', saveMove);
});

function saveMove() {
  playerSelection = this.textContent;
  computerSelection = computerPlay();
  round.textContent = playRound(computerSelection, playerSelection);
  if (playerScore === 5 || computerScore === 5){
    playerScore > computerScore ? winner.textContent = 'Player wins!' : winner.textContent = 'Computer wins.';
    buttons.forEach((button) => {
      button.removeEventListener('click', saveMove);
  });
}
}

function playRound(computer, player){
  let comp = computer.toLowerCase();
  comp = comp.charAt(0).toUpperCase() + comp.slice(1);
  let play = player.toLowerCase();
  play = play.charAt(0).toUpperCase() + play.slice(1);
  if (comp === play){
    return `It's a tie! You both chose ${comp}.`
  }else if (comp === 'Rock' && play === 'Paper' ||
            comp === 'Paper' && play === 'Scissors' ||
            comp === 'Scissors' && play === 'Rock') {
    playerScore += 1;
    updateScoreArea();
    return `You win! ${play} beats ${comp}.`;
  }else {
    computerScore += 1;
    updateScoreArea();
    return `You lose. ${comp} beats ${play}.`
  }
}
