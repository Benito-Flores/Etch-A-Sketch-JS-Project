const createBtn = document.querySelector(".create-btn");
const blockContainer = document.querySelector(".block-container");

let grid = 0;
let containerHeight = 0;
let containerWidth = 0;
let blockHeight = 0;
let blockWidth = 0;

createBtn.addEventListener("click", () => {

  if (grid === 0) {
    createGrid();
  } else {
    blockContainer.innerHTML = "";
    createGrid();
  }

});

function createGrid() {

  grid = +prompt("What Size Grid Do You Want? (Max 40)", 25);

  while (grid <= 0 || grid > 40) {
    grid = +prompt("Your Grid Needs to be Between 0 and 41");
  }

  containerWidth = grid * 10 + 2;
  containerHeight = grid * 10 + 2;
  for (let i = 1; i <= grid; i++) {
    for (let j = 1; j <= grid; j++) {
      let blocks = document.createElement("div");
      blockContainer.appendChild(blocks);
      blocks.classList.add("blocks");
      blocks.addEventListener("mouseover", () => {
        let randNum = Math.ceil(Math.random() * 10);
        

        function randomColor(num) {
          if (num === 1) {
            return "pink";
          } else if (num === 2) {
            return "blue";
          } else if (num === 3) {
            return "purple";
          } else if (num === 4) {
            return "cyan";
          } else if (num === 5) {
            return "green";
          } else if (num === 6) {
            return "white";
          } else if (num === 7) {
            return "yellow";
          } else if (num === 8) {
            return "red";
          } else if (num === 9) {
            return "orange";
          } else {
            return "brown";
          };
        };

        blocks.classList.add(`${randomColor(randNum)}`);
      });
      blocks.setAttribute(`style`, `
      height: ${500 / grid}px;
      width: ${500 / grid}px;
      border: 1px solid white;
      `);
    };
  };
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