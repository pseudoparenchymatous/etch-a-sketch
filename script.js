const gridSize = 16;

function drawGrid(size = 16) {
   const gridContainer = document.querySelector("#container");

   for (let i = 0; i < size * size; i++) {
      const box = document.createElement("div");
      box.classList.add("grid-box");
      gridContainer.appendChild(box);

      box.addEventListener("mouseover", () => {
         box.classList.add("black-bg");
      });
   }
}
