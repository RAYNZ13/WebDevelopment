let buttons = document.querySelector(".buttons");
let btn = document.querySelector("span");
let value = document.querySelector("value");
let body = document.querySelector("body");

for(let i=0; i < btn.lenght; i++){
    btn[i].addEventListener("click",function(){
        if(this.innerHTML == "="){
            value.innerHTML = eval(value.innerHTML);
        }else{
            if(this.innerHTML == "Clear"){
                value.innerHTML = "";
            }else{
                value.innerHTML += this.innerHTML;
            }
        }
    })
}