const choice = {
  rock: 0,
  paper: 1,
  scissor: 2,
};
const err = {
  invalid: -1,
  nan: NaN,
};
const score = {
  you: 0,
  computer: 0,
  count: 5,
};
function getSelection() {
  user_choice = getUserChoice();
  computer_choice = getComputerChoice();
  return [user_choice, computer_choice];
}

function getComputerChoice() {
  return Math.floor(Math.random() * Object.keys(choice).length);
}

function getUserChoice() {
  let user_choice = parseInt(
    prompt("Enter your choice!\nrock : 0\npaper : 1\nscissor : 2")
  );
  return user_choice;
}

function computeSelection(selection) {
  const round = document.querySelector(".round");
  round.textContent = "";
  if (selection[0] === selection[1]) {
    round.textContent = "it's a tie";
    return;
  } else if (selection[0] === choice.rock) {
    if (selection[1] === choice.paper) {
      score.computer += 1;
      round.textContent = "computer win!";
    } else {
      score.you += 1;
      round.textContent = "you win!";
    }
  } else if (selection[0] === choice.paper) {
    if (selection[1] === choice.scissor) {
      score.computer += 1;
      round.textContent = "computer win!";
    } else {
      score.you += 1;
      round.textContent = "you win!";
    }
  } else if (selection[0] === choice.scissor) {
    if (selection[1] === choice.rock) {
      score.computer += 1;
      round.textContent = "computer win!";
    } else {
      score.you += 1;
      round.textContent = "you win!";
    }
  }
}

function showScore() {
  console.log("show score");
  const you = document.querySelector("#you");
  const com = document.querySelector("#com");
  you.textContent = score.you;
  com.textContent = score.computer;
}

function computeResult() {
  const container = document.querySelector(".container");
  container.style.backgroundColor = "rgba(0,0,0,0.7)";
  let result;
  if (score.computer === score.you) {
    result = "It's a Tie!";
  } else if (score.computer > score.you) {
    result = "Computer Win!";
  } else {
    result = "You Won!";
  }
  document.querySelector(".winner").textContent = result;
}

function playRound() {
  score.computer = 0;
  score.you = 0;
  score.count = 5;
  showScore();
  const index = document.querySelector(".index");
  index.textContent = `Round : ${5 - score.count}` ;
  document.querySelector(".winner").textContent = "";
  const container = document.querySelector(".container");
  container.style.backgroundColor = "rgba(0,0,0,0.0)";
  const optionButtons = document.querySelectorAll(".option-button");
  optionButtons.forEach((button) =>
    button.addEventListener("click", setUserChoice)
  );
}

const play = document.querySelector("#play-button");
play.addEventListener("click", playRound);

function setUserChoice(e) {
  console.log(e.target.id);
  let user_choice = parseInt(e.target.id);
  let computer_choice = getComputerChoice();
  computeSelection([user_choice, computer_choice]);
  showScore();
  console.log("count", score.count);
  score.count--;
  const index = document.querySelector(".index");
  index.textContent = `Round : ${5 - score.count}` ;
  if (score.count === 0) {
    computeResult();
    count = 5;
    const optionButtons = document.querySelectorAll(".option-button");
    optionButtons.forEach((button) =>
      button.removeEventListener("click", setUserChoice)
    );
    const round = document.querySelector(".round");
    round.textContent = "";
  }
}
