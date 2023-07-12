const mode = {
  eraser: "eraser",
  black: "black",
  rainbow: "rainbow",
};

const grid = document.querySelector(".grid");
let gridSize = 16;
let currentColorMode = mode.black;

function createGrid() {
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  for (let i = 1; i <= gridSize * gridSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("draw");
    cell.addEventListener("mouseover", setColor);
    grid.appendChild(cell);
  }
}
function setColor(e) {
  console.log("setColor");
  if (currentColorMode === mode.black) {
    console.log("setColor- black");
    e.target.style.backgroundColor = "black";
  } else if (currentColorMode === mode.rainbow) {
    e.target.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
  } else {
    e.target.style.backgroundColor = "white";
  }
}

const controlButtons = document.querySelectorAll("#control-btn");
const colorButton = document.querySelectorAll("#color-btn");
controlButtons.forEach((btn) => addEventListener("click", setGridSize));
colorButton.forEach((btn) => addEventListener("click", setColorMode));

function setGridSize(e) {
  if (e.target.id === "control-btn") {
    e.target.classList.toggle(".active");
    gridSize = parseInt(e.target.className);
    clearGrid();
    createGrid(gridSize);
  }
}

function setColorMode(e) {
  if (!e.target.id === "color-btn") {
    return;
  }
  if (e.target.className === "black") {
    currentColorMode = mode.black;
  } else if (e.target.className === "rainbow") {
    currentColorMode = mode.rainbow;
  } else {
    currentColorMode = mode.eraser;
  }
}

function clearGrid() {
  grid.innerHTML = "";
}
