const changeSizeButton = document.querySelector("button");
const drawGrid = document.querySelector(".container .cell-grid");
const gridDimension = 960;
let cellSize = 16; // Default value.

function initGrid(){
    let boxSize = gridDimension / cellSize;

    for(let i = 0; i < cellSize * cellSize; i++){
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.width = boxSize + "px";
            cell.style.height = boxSize + "px";
            drawGrid.append(cell);
    }
    paintGrid();
}
function paintGrid(){
    document.querySelectorAll(".cell").forEach(element => {
        element.addEventListener("mouseover", ()=> {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let rgbStr = "rgb(" + r + "," + g + "," +  b + ")";
            element.style.backgroundColor = rgbStr;

            // Increases opacity 1.25x every time.
            let currentOpacity = window.getComputedStyle(element).opacity;
            element.style.opacity = currentOpacity * 1.25;
        }); 
    });
}
function clearGrid(){
    let grids = document.querySelectorAll(".cell");  
    grids.forEach(element => {
        element.remove();
    });
}

changeSizeButton.addEventListener('click', () => {
    cellSize = prompt("Enter new size (Max:100)");
    if(cellSize > 80 || cellSize < 16){
        alert("Invalid number!");
        return;
    }
    clearGrid();
    initGrid();
});

initGrid();


