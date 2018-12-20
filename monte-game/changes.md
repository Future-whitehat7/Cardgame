
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


// BETTING PROMPT
// let userMoney = 200; //User starts with this amount
// alert(`You have a total of $${userMoney} right now`);
//
// //How much the user is betting
// let userBet = window.prompt("How much do you want to bet?");
//
// // If statement checks if the user bet the right amount
// if (Number(userBet) > userMoney) {
//   userBet = window.prompt("You don't have enough money, try again");
// } else if (Number(userBet) < 50){
//   userBet = window.prompt("Please bet $50 or higher");
// }
//
// // Converts bet from string to number type
// let gamePot = Number(userBet);
//
// // Subtracts the bet from user money
// userMoney -= gamePot;
//
// gamePot += gamePot; //doubles gamepot
// alert(`The pot is $${gamePot}`);
// alert(`You have a total of $${userMoney} remaining`);
//
// // Gets the elements that hold the userMoney and gamePot ID inside the HTML
// let money = document.getElementById('userMoney');
// let pot = document.getElementById('gamePot');
//
// // Adds following money amount to the html elements
// money.innerHTML = `User money ${userMoney}`;
// pot.innerHTML = `Game pot ${gamePot}`;
//******* ends here***
// creating random index.
// const randomSelect= Math.floor(Math.random() * cards.length);
// console.log(cards[randomSelect]); // picks random card.



const cards = [
  {card: 'Ace', suit: 'Spades'},
  {card: 'Ace', suit: 'Hearts'},
  {card: 'Ace', suit: 'Diamonds'},
];


let containerDiv = document.querySelector('.container');

function dynamicallyCreateCards() {
  for (let i = 0; i < cards.length; i ++) {
    let cardObj = document.createElement('div');
    cardObj.classList.add('card');
    cardObj.innerHTML = `${cards[i].card} of ${cards[i].suit}`;

    cardObj.addEventListener("click", (evt) => {
      console.log(`${cards[i].card} of ${cards[i].suit}`);
    }) // eventlistener.

    containerDiv.appendChild(cardObj);
    setTimeout(function () { window.scrollTo(0,1)},1);

    // setTimeout(function () {
    //   $(".card").rotate(true);
    // }, 5000);

    // document.querySelector(".card").classList.toggle("flip"); // example from david walsh css flip
  }
  // dynamicallyCreateCards();
}
dynamicallyCreateCards();

// This shuffle algorithm was provided by Kenny's WDI in-class lab
function shuffleCards(deck) {
  return deck.sort(() => 0.5 - Math.random());
}

// 1. Add click event listeners to each card


// 2. Display the card's details when I click it
// 3. Shuffle my array of card objects
// 4. How do I shuffle the cards before they get dynamically created
// const randomSelect= math.floor(math.Random() * deck.length);
// 5. Make a message popup showing the card's details when clicked
// onst cardFlipped
// button on click should start game.



//// 12/18/19- bug ////
// let images =[]; // all svg images for game will be in this array.
// images. slice and concat(images)
let gameCard = document.getElementById("game-card");
let gameBox = document.getElementById("game");
let gameclick = document.getElementById("btn")
let containerDiv = document.querySelector('.container');

function dynamicallyCreateCards() {
  for (let i = 0; i < cards.length; i ++) {
    let cardObj = document.createElement('div');
    cardObj.classList.add('card');
    cardObj.innerHTML = `${cards[i].card} of ${cards[i].suit}`;

    cardObj.addEventListener("click", (evt) => {
      console.log(`${cards[i].card} of ${cards[i].suit}`);
    }) // eventlistener.

    containerDiv.appendChild(cardObj);
    setTimeout(function () { window.scrollTo(0,1)},1);


}
dynamicallyCreateCards();



/////



// 3 EASY STEPS FOR DYNAMICALLY CREATING ELEMENT WITH JS
// let containerDiv = document.querySelector('#container');1
// let card = document.createElement('div');2
// containerDiv.appendChild(card);3
//create element, add clas to element, append the element to body.



1- cards pics from vecteezy.com
reference
https://css-tricks.com/
