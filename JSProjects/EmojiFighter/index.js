let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

function randomFighter() {
    let randomIndex = Math.floor(Math.random() * fighters.length)
    return fighters[randomIndex]
}  

fightButton.addEventListener("click", function() {
    stageEl.innerHTML = randomFighter() + " VS "+ randomFighter()
})
 