function game() {

  let playerScore = 0;
  let computerScore = 0;

  function computerPlay() {
  let choices = ['Rock', 'Paper', 'Scissors']
  return choices[Math.floor(Math.random()*choices.length)]
}

for (i=0; i<5; i++){
  let playerSelection = prompt('Choice?');
  while ((playerSelection.toLowerCase() !== 'rock') && (playerSelection.toLowerCase() !== 'paper') && (playerSelection.toLowerCase() !== 'scissors')) {
    alert('Please choose Rock, Paper, or Scissors');
    playerSelection = prompt('Choice?');
  }
  let computerSelection = computerPlay();
  console.log(playRound(computerSelection, playerSelection));
};
playerScore > computerScore ? console.log('Player wins!') : console.log('Computer wins.');


function playRound(computer, player){
  let comp = computer.toLowerCase();
  comp = comp.charAt(0).toUpperCase() + comp.slice(1);
  let play = player.toLowerCase();
  play = play.charAt(0).toUpperCase() + play.slice(1);
  if (comp === play){
    return `It's a tie! You both chose ${comp}`
  }else if (comp === 'Rock' && play === 'Paper' ||
            comp === 'Paper' && play === 'Scissors' ||
            comp === 'Scissors' && play === 'Rock') {
    playerScore += 1;
    return `You win! ${play} beats ${comp}.`;
  }else {
    computerScore += 1;
    return `You lose. ${comp} beats ${play}.`
  }
}

}
game();
