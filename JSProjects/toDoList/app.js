const inputEl = document.getElementById("input-text")

const listEl = document.getElementById("list-container");

function addTask(){
    console.log("button i sclicked");
    
    if(inputEl.value === ''){
        alert("Please enter a task..");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputEl.value;
        listEl.appendChild(li);
        console.log(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputEl.value = "";
    saveList();
}

listEl.addEventListener("click",(event) => {
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveList();
    }else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveList;
    }
},false);

function saveList(){
    localStorage.setItem("data",listEl.innerHTML);
}

function showTask(){
    listEl.innerHTML = localStorage.getItem("data");
}

showTask();

let deleteEl = document.getElementById("del");
deleteEl.addEventListener("click",(event) => {
    localStorage.clear();
    listEl.innerHTML = "";
},false)