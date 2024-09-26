function initGrid(){
    for(let i = 0; i < 16; i++){
        for(let j = 0; j < 16; j++){
            let div = document.createElement("div");
            div.style.width = "2px";
            div.style.height = "2px";
            document.querySelector(".main").append(div);
        }
    }
}

initGrid();