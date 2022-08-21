const gridSize = 16;

const gridContainer = document.querySelector("#container");

for (let i = 0; i < gridSize * gridSize; i++) {
  const box = document.createElement("div");
  box.classList.add("grid-box");
  gridContainer.appendChild(box);
}
