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
  if (selection[0] === selection[1]) {
    return;
  } else if (selection[0] === choice.rock) {
    if (selection[1] === choice.paper) {
      score.computer += 1;
    } else {
      score.you += 1;
    }
  } else if (selection[0] === choice.paper) {
    if (selection[1] === choice.scissor) {
      score.computer += 1;
    } else {
      score.you += 1;
    }
  } else if (selection[0] === choice.scissor) {
    if (selection[1] === choice.rock) {
      score.computer += 1;
    } else {
      score.you += 1;
    }
  }
}

function showScore() {
  console.log("You: ", score.you, "Computer: ", score.computer);
}

function computeResult() {
  console.log("***Final Result***");
  if (score.computer === score.you) {
    console.log("It's a Tie!");
    console.log("You: ", score.you, "Computer: ", score.computer);
  } else if (score.computer > score.you) {
    console.log("Computer Win!");
    console.log("You: ", score.you, "Computer: ", score.computer);
  } else {
    console.log("You Won!");
    console.log("You: ", score.you, "Computer: ", score.computer);
  }
}

function isValidSelection(selection) {
  return isNaN(selection) ||
    selection === err.invalid ||
    selection >= 3 ||
    selection < 0
    ? false
    : true;
}

function playRound() {
  for (let i = 0; i < 5; ) {
    selection = getSelection();
    if (!isValidSelection(selection[0])) {
      alert("Not a valid selection");
      continue;
    } else {
      computeSelection(selection);
      showScore();
      i++;
    }
  }
  computeResult();
}

const play = document.querySelector("#play-button");
play.addEventListener("click", playRound);
