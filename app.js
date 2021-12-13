document.addEventListener('DOMContentLoaded', () => {
/// card options, two of each
    const cardsArray = [
        {
            name: 'blowfish',
            img:'images/blowfish.png'
        },
        {
            name: 'blowfish',
            img:'images/blowfish.png'
        },
        {
            name: 'crab',
            img:'images/crab.png'
        },
        {
            name: 'crab',
            img:'images/crab.png'
        },
        {
            name: 'fish',
            img:'images/fish.png'
        },
        {
            name: 'fish',
            img:'images/fish.png'
        },
        {
            name: 'octopus',
            img:'images/octopus.png'
        },
        {
            name: 'octopus',
            img:'images/octopus.png'
        },
        {
            name: 'seahorse',
            img:'images/seahorse.png'
        },
        {
            name: 'seahorse',
            img:'images/seahorse.png'
        },
        {
            name: 'seal',
            img:'images/seal.png'
        },
        {
            name: 'seal',
            img:'images/seal.png'
        },
        {
            name: 'seaturtle',
            img:'images/seaturtle.png'
        },
        {
            name: 'seaturtle',
            img:'images/seaturtle.png'
        },
        {
            name: 'whale',
            img:'images/whale.png'
        },
        {
            name: 'whale',
            img:'images/whale.png'
        },
    ]

//Randomize our Cards array
cardsArray.sort(() => 0.5 - Math.random());


const grid = document.querySelector('.grid'); //html id
const resultDisplay = document.querySelector('#result'); //html class
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

//Create Playing Board
function createBoard() {
    for (let i = 0; i < cardsArray.length; i++) { //loop through all the cards
        var card = document.createElement('img') //create a card for each 
        card.setAttribute('src', 'images/memory.png') //set that card image
        card.setAttribute('data-id', i) //give it an id the "i" linking it to the number of cards in the array
        card.addEventListener('click', flipCard) //listen for it to get clicked
        grid.appendChild(card) //add to end 
    }
}

//Check for Match
function checkForMatch() {
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0] //first value in array
    const optionTwoId = cardsChosenId[1] //second value in array
    if (cardsChosenId[0] === cardsChosenId[1]) { // check if they chose the same card twice
        cards[optionOneId].setAttribute('src', 'images/memory.png') //return the card image back to the back
        alert("Sorry, pick two different cards.")   
    }
    else if (cardsChosen[0] === cardsChosen[1]) { //do they match?
        alert("You found a match!") 
        cards[optionOneId].removeEventListener('click', flipCard) //removes the ability to flip a white card
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/memory.png') //return the card image back to the back
        cards[optionTwoId].setAttribute('src', 'images/memory.png')
        alert("Memorize the cards and try again.")
    }
    //clear arrays to choose again
    cardsChosen = [];
    cardsChosenId = [];
    
    resultDisplay.textContent = cardsWon.length //display the amount of cards matched
    if (cardsWon.length === cardsArray.length/2) {
        resultDisplay.textContent = "Wow! Well done, you found all the matches!"

    } //if results are now half the length of the array then you've finished
}

//Flip Your Card
function flipCard() {
    let cardId = this.getAttribute('data-id') //id created when created grid
    cardsChosen.push(cardsArray[cardId].name) //push card to card chosen with the card id, name
    cardsChosenId.push(cardId) //just push id
    this.setAttribute('src', cardsArray[cardId].img) //show the image for that id in the grid
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 650) //timeout in milliseconds
    }
}


createBoard();

})
