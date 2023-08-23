// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEl)

let count = 0;
function increment(){
    console.log("Clicked")
    count += 1
    countEl.textContent = count
    console.log(count)
    
}

function save(){
    let savedcount = count+ " - "
    saveEl.textContent += savedcount
    countEl.textContent = 0
    count = 0
}
