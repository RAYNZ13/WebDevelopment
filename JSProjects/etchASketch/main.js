document.addEventListener("DOMContentLoaded", function() {
    createGrid(16);
    console.log("DOM fully loaded and parsed");
});

function createGrid(size){
    let boardEl = document.querySelector(".board");

    boardEl.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    boardEl.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i=0;i<numDivs;i++){
        let div = document.createElement("div");
        div.style.backgroundColor = "red";
        boardEl.insertAdjacentElement("beforeend",div);
    }
}
