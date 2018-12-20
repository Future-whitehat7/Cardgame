
// logic
// three cards
// array of 3 objects
//2- shuffle my array
//3- check if  click was the correct guess
//4 -win message
//5 - let player1Card/player2Card.
//write announcecard function
// to check who won the game, we must compare player card
//post - add animated progress bar.
//post change alert color
// dont forget to load back the prompt.

//
let cardImages = [
'back1.png',
'diamond1.png',
'heart1.png',
'spades1.png'
];
console.log(cardImages)
// shuffling the cardImages
let shuffle = function (shuffleCards) {
  for (let i = shuffleCards.length-1; i > 0; i --){
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let itemAtIndex = shuffleCards[randomIndex];

    shuffleCards[randomIndex] = shuffleCards[i];
    shuffleCards[i] = itemAtIndex;
  }
  console.log(shuffleCards)
}
shuffle(cardImages)
//

//
// shuffleCards.shuffle();
function shuffleCards(deck) {
  return deck.sort(() => 0.5 - Math.random());
}





const cards = [
  {card: 'Ace', suit: 'Spades'},
  {card: 'Ace', suit: 'Hearts'},
  {card: 'Ace', suit: 'Diamonds'},
];


let containerDiv = document.querySelector('.monte');
let shuffledDeck = shuffleCards(cards);

function createCards() {
  for (let i = 0; i < shuffledDeck.length; i ++) {
    let cardObj = document.createElement('div');
    cardObj.classList.add('card');
    console.log(cardObj);
    cardObj.setAttribute('data-name', `${shuffledDeck[i].suit}`)

if (shuffledDeck[i].suit === 'Spades') {
  cardObj.classList.add('spades');
} else if (shuffledDeck[i].suit === 'Hearts') {
  cardObj.classList.add('heart');
  console.log('this worked')
} else {
  cardObj.classList.add('diamond');

}


    // trying the fisher-yates shuffle algorithm. uses a for loop and sets the iterator to this.cards.length-1.
     // shuffleCards() {
     //   for(let i = this.shuffledDeck.length - 1; i > 0; i--) {
     //     let randomIndex = Math.floor(Math.random() * )
     //   }
     // }


    cardObj.addEventListener("click", (evt) => {
      evt.preventDefault();
      console.log(`${shuffledDeck[i].card} of ${shuffledDeck[i].suit}`);
      cardObj.classList.remove('hide-card');
      cardObj.classList.add('show-card');


      console.log(cardObj);
      // check to see if when card is clicked the flip class is added.
      // check if what you clicked matches ace of spade
      if (cardObj.dataset.name === 'Spades') {
        console.log("you won!");
      }
      else{
        console.log("keep playing");
      cardObj.classList.add('show-card');
      // console.log("you lose");
      document.querySelector(".card").classList.toggle("flip");
      }

    }); // eventlistener.

    containerDiv.appendChild(cardObj);
    setTimeout(() => {
      // evt.preventDefault();  // prevents refreshing of page
      cardObj.classList.add('hide-card');
    }, 1000)


    // document.querySelector(".card").classList.toggle("flip"); // example from david walsh css flip
  }
}
createCards();

// This shuffle algorithm was provided by Kenny's WDI in-class lab
// function shuffleCards(deck) {
//   return deck.sort(() => 0.5 - Math.random());
// }
// // trying the fisher-yates shuffle algorithm. uses a for loop and sets the iterator to this.cards.length-1.
//  shuffleCards() {
//    for(let i = this.)
//  }

function startGame() { // doesnt pop up immediately, except on click.
// // BETTING PROMPT
  let userMoney = 200; //User starts with this amount
  alert(`You have a total of $${userMoney} right now`);

  //How much the user is betting
  // trying let start game buttn prompt users.
  let userBet = window.prompt("How much do you want to bet?");

  // If statement checks if the user bet the right amount
  if (Number(userBet) > userMoney) {
    userBet = window.prompt("You don't have enough money, try again");
  } else if (Number(userBet) < 50){
    userBet = window.prompt("Please bet $50 or higher");
  }

  // Converts bet from string to number type
  let gamePot = Number(userBet);

  // Subtracts the bet from user money
  userMoney -= gamePot;

  gamePot += gamePot; //doubles gamepot
  alert(`The pot is $${gamePot}`);
  alert(`You have a total of $${userMoney} remaining`);

  // Gets the elements that hold the userMoney and gamePot ID inside the HTML
  let money = document.getElementById('userMoney');
  let pot = document.getElementById('gamePot');

  // Adds following money amount to the html elements
  money.innerHTML = `User money ${userMoney}`;
  pot.innerHTML = `Game pot ${gamePot}`;
  // ******* ends
  // creating random index.
  const randomSelect = Math.floor(Math.random() * cards.length);
  console.log(cards[randomSelect]); // picks random card.
}



let replayButton = document.querySelector(".replay");
replayButton.addEventListener("click", function() {
  location.reload();
});

////////prompt for usrs

// 1. Add click event listeners to each card


// 2. Display the card's details when I click it
// 3. Shuffle my array of card objects
// 4. How do I shuffle the cards before they get dynamically created
// const randomSelect= math.floor(math.Random() * deck.length);
// 5. Make a message popup showing the card's details when clicked
// onst cardFlipped
// button on click should start game.










// 3 EASY STEPS FOR DYNAMICALLY CREATING ELEMENT WITH JS
// let containerDiv = document.querySelector('#container');1
// let card = document.createElement('div');2
// containerDiv.appendChild(card);3
//create element, add clas to element, append the element to body.
