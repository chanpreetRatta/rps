function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) return "rock";
  else if (choice === 1) return "paper";
  else if (choice === 2) return "scissors";
}

// This whole section will get human choice//
//Start//

const main = document.querySelectorAll(".main > div");
let RESULT = document.querySelector(".results");
let scoreBoard = document.querySelectorAll(".results > div ");
console.log(scoreBoard);

function printResult(result, display, winner) {
  let counter = 0;
  let finalScore = 0;

  if (winner === 1)
    display.childNodes.forEach((element) => {
      if (element.className === "description")
        console.log((element.textContent = result));
    });
}

main.forEach((element) => element.addEventListener("click", playRound));

//End user input//
function playRound() {
  const computerChoice = getComputerChoice();
  const humanChoice = this.className;

  const computerWins = -1;
  const draw = 0;
  const humanWins = 1;

  const winStatement = `You win! ${humanChoice} beats ${computerChoice}`;
  const drawStatement = `It's a Draw! ${humanChoice} is same as ${computerChoice}`;
  const lostStatement = `You Loss! ${computerChoice} beats ${humanChoice}`;

  if (humanChoice === "paper" && computerChoice === "rock") {
    printResult(winStatement, RESULT, humanWins);
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    printResult(winStatement, RESULT, humanWins);
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    printResult(winStatement, RESULT, humanWins);
  } else if (humanChoice === computerChoice) {
    printResult(drawStatement, RESULT, draw);
  } else printResult(lostStatement, RESULT, computerWins);
}
