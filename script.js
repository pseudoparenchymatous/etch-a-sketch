function main() {
   drawGrid();
   const gridSizeButton = document.querySelector("#set-grid-size");
   let gridSize = 16;
   gridSizeButton.addEventListener("click", function() {
      gridSize = Number(window.prompt("Grid size (max 100)", ""));
      if (gridSize > 100) gridSize = 100;
      if (gridSize < 1) gridSize = 1;

      drawGrid(gridSize);
   });
}


function drawGrid(size = 16) {
   const gridContainer = document.querySelector("#container");
   gridContainer.innerHTML="";
   for (let i = 0; i < size * size; i++) {
      const box = document.createElement("div");
      box.classList.add("grid-box");
      gridContainer.appendChild(box);

      box.addEventListener("mouseover", () => {
         box.classList.add("black-bg");
      });
   }
}

main();
