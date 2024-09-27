const changeSizeButton = document.querySelector("button");
const drawGrid = document.querySelector(".container .draw-grid");
const gridDimension = 960;
let gridSize = 16; // Default value.

function initGrid(){
    let boxSize = gridDimension / gridSize;

    for(let i = 0; i < gridSize * gridSize; i++){
            let div = document.createElement("div");
            div.classList.add("grid-box");
            div.style.width = boxSize + "px";
            div.style.height = boxSize + "px";
            document.querySelector(".draw-grid").append(div);
    }
}
function clearGrid(){
    let grids = document.querySelectorAll(".grid-box");  
    grids.forEach(element => {
        element.remove();
    });
}

changeSizeButton.addEventListener('click', () => {
    gridSize = prompt("Enter new size (Max:100)");
    if(gridSize > 80 || gridSize < 16){
        alert("Invalid number!");
        return;
    }
    clearGrid();
    initGrid();
});

initGrid();