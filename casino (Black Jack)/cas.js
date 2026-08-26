
let cards = []
let sum = 0
let message = " "
let isAlive = false
let hasblackjack = false

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let player = {
    name: "eshaal",
    chips: 200
}

let playerEl = document.getElementById("player-chip")
playerEl.textContent = player.name + ": $" + player.chips

function genrandnum(){
    return Math.floor(Math.random() * 13) + 1
}

function startgame(){
    isAlive = true
    let firstcard = genrandnum()
    let secondcard = genrandnum()
    cards.push(firstcard)
    cards.push(secondcard)
    sum += firstcard + secondcard
    rendergame()
}

function rendergame(){
    if(sum <= 20){
        message = "Do you want to draw another card?"
    } else if(sum === 21){
        message = "You won the game!"
        hasblackjack = true
    } else {
        message = "You are out of the game"
        isAlive = false
    }
    
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " 
    for(let i = 0 ; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " " 
    } 
}

function newcard(){
    if(isAlive === true && hasblackjack === false){
        let newcard = genrandnum()
        cards.push(newcard)
        sum += newcard
        rendergame()
    }
}

