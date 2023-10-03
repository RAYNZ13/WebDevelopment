let color = "black";
let click = false; //global declaration
document.addEventListener("DOMContentLoaded", function() {
    createGrid(16);
    let popupEl = document.querySelector('#popup');

    document.querySelector("body").addEventListener("click",function(e){
        if(e.target.tagName != "BUTTON"){
            click = !click;
            let drawEl = document.querySelector("#draw");
            if(click){
                drawEl.innerHTML = "You are allowed to Draw";
            }else{
                drawEl.innerHTML = "You are not allowed to Draw, click one and proceed";
            }
        }
        
    })

    popupEl.addEventListener("click",function(){
        let size = getSize();
        createGrid(size);
    })
    console.log("DOM fully loaded and parsed");
});

function createGrid(size){
    let boardEl = document.querySelector(".board");

    boardEl.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    boardEl.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i=0;i<numDivs;i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover",colorDiv);
        boardEl.insertAdjacentElement("beforeend",div);
    }
}


function getSize(){
    let input =  prompt("What will be the size of the grid? (1-100)"); 
    let messageEl = document.querySelector("#message");
    if(input == ""){
        messageEl.innerHTML = "Please enter a number";
    }else if(input<0 || input>100){
        messageEl.innerHTML = "Please enter a number between 1 and 100";
    }else{
        messageEl.innerHTML = "Now you can play"
    }
    return input;   
}

function colorDiv(e){
    //e is the event object
    if(click){
            console.log(e);
            if(color == "random"){
                this.style.backgroundColor =  `hsl(${Math.random()*360},100%,50%)`;
            }else{
                this.style.backgroundColor = 'black';
            }
        }
}

function setColor(colorChoice){
    color = colorChoice;
}

function erase(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}