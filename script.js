const gridSize = 16;

function drawGrid() {
   const gridContainer = document.querySelector("#container");

   for (let i = 0; i < gridSize * gridSize; i++) {
      const box = document.createElement("div");
      box.classList.add("grid-box");
      gridContainer.appendChild(box);

      box.addEventListener("mouseover", () => {
         box.classList.add("black-bg");
      });
   }
}
