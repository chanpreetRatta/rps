function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) return "rock";
  else if (choice === 1) return "paper";
  else if (choice === 2) return "scissor";
}

// This whole section will get human choice//
//Start//

const main = document.querySelectorAll(".main > div");
let RESULT = document.querySelector(".result");

function printResult(result, display) {
  display.textContent = result;
}

main.forEach((element) => element.addEventListener("click", playRound));

//End user input//
function playRound() {
  const computerChoice = getComputerChoice();
  const humanChoice = this.className;

  const winStatement = `You win! ${humanChoice} beats ${computerChoice}`;
  const drawStatement = `It's a Draw! ${humanChoice} is same as ${computerChoice}`;
  const lostStatement = `You Loss! ${computerChoice} beats ${humanChoice}`;

  if (humanChoice === "paper" && computerChoice === "rock") {
    printResult(winStatement, RESULT);
  } else if (humanChoice === "rock" && computerChoice === "scissor") {
    printResult(winStatement, RESULT);
  } else if (humanChoice === "scissor" && computerChoice === "paper") {
    printResult(winStatement, RESULT);
  } else if (humanChoice === computerChoice) {
    printResult(drawStatement, RESULT);
  } else printResult(lostStatement, RESULT);
}
