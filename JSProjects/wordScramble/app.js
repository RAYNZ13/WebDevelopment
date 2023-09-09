let words = [
    {
        word: "apple",
        hint: "A red fruit"
    },
    {
        word: "meeting",
        hint: "A gathering of people"
    },
    {
        word: "ironman",
        hint: "man of metal"
    },
    {
        word: "pencil",
        hint: "tool used to write in school"
    },{
        word: "computer",
        hint: "device used to surf the web"
    },{
        word: "pizza",
        hint: "food that is round and has cheese"
    }
]

let wordEl = document.querySelector("#word");
let hintEl = document.querySelector("#hints");
let timeEl = document.querySelector("#time");
let inputEl = document.querySelector("input");
let refreshEl = document.querySelector("#refresh-btn");
let checkEl = document.querySelector("#check-btn");

let correctWord, timer;

const initTimer = (maxTime) => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            return(timeEl.innerText = maxTime);
        }
        alert(`Time is up! : ${correctWord.toUpperCase()} was the correct word`);
        initGame();
    }, 1000);
};

const initGame = () => {
    initTimer(30);
    let randomIndex = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomIndex.word.split("");//["a","p","p","l","e"]

    //shuffling of array
    for(let i=wordArray.length-1;i>0;i--){
        let j = Math.floor(Math.random() * (i+1));
        [wordArray[i],wordArray[j]] = [wordArray[j],wordArray[i]];
    }

    wordEl.innerText = wordArray.join("");
    hintEl.innerText = randomIndex.hint;
    correctWord = randomIndex.word;
    inputEl.value = "";
    inputEl.setAttribute("maxlength",correctWord.length);
};

initGame();

const checkGame = () => {
    let userWord = inputEl.value.toLowerCase();
    if(!userWord) return alert("Please enter a word");
    if(userWord === correctWord){
        alert("Congrats, You won!");
        initGame();
    }else{
        alert("Oops! ${userWord.toUpperCase()} is not the correct word");
    }
};

refreshEl.addEventListener("click",initGame);
checkEl.addEventListener("click",checkGame);

initGame();