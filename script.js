const createBtn = document.querySelector(".create-btn");
const blockContainer = document.querySelector(".block-container");

let grid = 0;
let containerHeight = 0;
let containerWidth = 0;
let blockHeight = 0;
let blockWidth = 0;

// Creates grid by clicking the create button
createBtn.addEventListener("click", () => {

  if (grid === 0) {
    createGrid();
  } else {
    blockContainer.innerHTML = "";
    createGrid();
  }

});

// Creates grid size based of user input (max 40x40).
function createGrid() {

  grid = +prompt("What Size Grid Do You Want? (Max 40)", 25);

  // Will only accept values between 0 and 41
  while (grid <= 0 || grid > 40) {
    grid = +prompt("Your Grid Needs to be Between 0 and 41");
  }

  // Creates container size based of grid input
  containerWidth = grid * 10 + 2;
  containerHeight = grid * 10 + 2;

  // loop to create the correct amount of blocks
  for (let i = 1; i <= (Math.pow(grid, 2)); i++) {

      let blocks = document.createElement("div");
      blockContainer.appendChild(blocks);
      blocks.classList.add("blocks");

      // Event listener that generates a random number and calls the randomColor function for each block
      blocks.addEventListener("mouseover", () => {
        let randNum = Math.ceil(Math.random() * 7);
        blocks.classList.add(`${randomColor(randNum)}`);
      });

      // Sets the block's height and width
      blocks.setAttribute(`style`, `
      height: ${500 / grid}px;
      width: ${500 / grid}px;
      border: 1px solid white;
      `);

  };

  // Sets containers attributes
  blockContainer.setAttribute(`style`, `
  border: 1px solid red;
  height: ${(500 / grid) * grid + 2}px;
  width: ${(500 / grid) * grid + 2}px;
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  `);

};

// Takes a number and returns a color.
function randomColor(num) {
  if (num === 1) {
    return "red";
  } else if (num === 2) {
    return "orange";
  } else if (num === 3) {
    return "yellow";
  } else if (num === 4) {
    return "green";
  } else if (num === 5) {
    return "blue";
  } else if (num === 6) {
    return "indigo";
  } else if (num === 7) {
    return "violet";
  };
};