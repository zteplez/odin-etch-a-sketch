function initGrid(){
    for(let i = 0; i < 16 * 16; i++){
            let div = document.createElement("div");
            div.classList.add("grid-box");
            document.querySelector(".container").append(div);
    }
}

initGrid();