
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
console.log(messageEl);

let sumEl = document.getElementById("sum-el");
//querySelector can be used to select any element
console.log(sumEl);

let cardEl = document.getElementById("card-el");
console.log(cardEl);
console.log(cards);

let player = {
    name:"Mortal",
    chips:100
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name+" : $"+player.chips;

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard+secondCard;
    renderGame();
}

function getRandomCard(){
    // if 1     -> return 11
    // if 11-13 -> return 10
    let num = Math.floor(Math.random()*13)+1;
    if(num === 1){
        return 11;
    }else if(num > 10){
        return 10;
    }else{
        return num;
    }
    
}
function renderGame() {
    // cardEl.textContent = "Cards: "+cards[0]+" & "+cards[1];
    cardEl.textContent = "Cards: ";
    for(let i=0;i<cards.length;i++){
        cardEl.textContent += cards[i]+" ";
    }

    sumEl.textContent = "Sum: "+sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
        // sum = 0;
        // cards = [];
    }
    console.log(message);
    messageEl.textContent = message;
}

function newCard(){
    console.log("Drawing a new card from the deck!");
    
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        console.log("New card: "+cards);
        renderGame();
    }

}