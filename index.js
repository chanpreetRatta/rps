function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) return "rock";
  else if (choice === 1) return "paper";
  else if (choice === 2) return "scissor";
}

function getHumanChoice() {
  let choice = prompt(
    "Enter you choice, Rock, Paper or Scissors."
  ).toLowerCase();
  return choice;
}

function playRound() {
  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice();
  const winStatement = `You win! ${humanChoice} beats ${computerChoice}`;
  const drawStatement = `It's Draw! ${humanChoice} is same as ${computerChoice}`;
  const lostStatement = `You Loss! ${computerChoice} beats ${humanChoice}`;

  if (humanChoice === "paper" && computerChoice === "rock") return winStatement;
  else if (humanChoice === "rock" && computerChoice === "scissor")
    return winStatement;
  else if (humanChoice === "scissor" && computerChoice === "paper")
    return winStatement;
  else if (humanChoice === computerChoice) return drawStatement;
  else return lostStatement;
}

function playGame(numberOfRounds) {
  let trigger = 0;
  while (trigger < numberOfRounds) {
    console.log(playRound());
    trigger++;
  }
}
