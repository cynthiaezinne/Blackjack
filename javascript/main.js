
let cards = []
let sum = 0
let isAlive = false
let hasBlackJack = false
let message = ""
let italicEl = document.getElementById("italic-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let player = {
    name: 'Abas:',
    chips: 200
}
let playerName = document.getElementById("player-name")
playerName.textContent = `${player.name} \$${player.chips}`
function getRandomCard() {
  let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    } 
}
function startGame() {
        isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
           
          cardsEl.textContent = "cards: "
    for( let i = 0; i < cards.length; i += 1) {
       cardsEl.textContent += cards[i] + ' '
    }
    sumEl.textContent = "sum:" + sum

    if(sum === 21) {
        message ="You won!"
        hasBlackJack = true
    }else if(sum < 21) {
     message ="Do You want to draw another card?"
     
    }else{
        message ="You lost"
        isAlive = false
        
    }
    italicEl.textContent = message
}

function newCard() {
     if (isAlive === true && hasBlackJack === false) {
let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
     }

   
}
