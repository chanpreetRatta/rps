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
let COUNTER = 0;
let FINAL_SCORE = 0;

function printResult(result, toDisplay, winner) {
  let display = toDisplay.childNodes;
  let scores = document.querySelectorAll(".results > div > .scores");

  display.forEach((child) => {
    if (child.className === "description") {
      child.textContent = result;
    }
  });

  if (winner === 1) {
    let parseScore = parseInt(scores[0].textContent);
    parseScore++;
    scores[0].textContent = parseScore;
  } else if (winner === -1) {
    let parseScore = parseInt(scores[1].textContent);
    parseScore++;
    scores[1].textContent = parseScore;
  }

  FINAL_SCORE += winner;
  COUNTER++;
  console.log(FINAL_SCORE);

  if (COUNTER === 4) {
    if (FINAL_SCORE < 0) {
      alert("You Lost");
      location.reload();
    } else if (FINAL_SCORE > 0) {
      alert("You win");
      location.reload();
    } else {
      alert("It's a Draw");
      location.reload();
    }
  }
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
