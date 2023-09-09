// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field
let myLeads = [];
const inputEl = document.getElementById("input-el");
let saveEl = document.getElementById('save-btn');
const ulEl = document.getElementById('ul-el');
let deleteBtn = document.getElementById('delete-btn');  
// Push the value "www.awesomelead.com" to myArray when the input button is clicked
let tabBtn = document.getElementById('tab-btn');
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);


if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

const tabs = [
    {url:"https://www.linkedin.com/in/rayyan-ahmed-1b1b68243/"}
]

tabBtn.addEventListener("click",function(){
    console.log(tabs[0].url);
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);
})
function render(leads){
    let listItems = "";
    for(let i=0;i<leads.length;i++){
        // ulEl.innerHTML += "<li>"+myLeads[i]+"</li>";

        //2nd Method
        //create element
        //set text content
        //append to ul
        // const li = document.createElement("li");
        // li.textContent = myLeads[i];
        // ulEl.append(li);
    // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
        listItems += `
            <li>
                <a target='_blank' href = '${leads[i]}'> 
                    ${leads[i]}
                </a>
            </li>
        `
        console.log(listItems);
    }
    // 3. Render the listItems inside the unordered list using ulEl.innerHTML
    ulEl.innerHTML = listItems;
}


deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads = [];
    render(myLeads);
    console("cleared")
})
saveEl.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    console.log(myLeads);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);

    console.log(typeof localStorage);
})
// Log out the items in the myLeads array using a for loop

// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
