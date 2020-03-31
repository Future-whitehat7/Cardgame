
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
// let cardImages = [
// 'back1.png',
// 'diamond1.png',
// 'heart1.png',
// 'spades1.png'
// ];

var mySound;
var audioMp3 = new Audio();   // defining the var for audio and assigning it a new value.



const cards = [    // assigning a cards arrray.
  {card: 'Ace', suit: 'Spades'},
  {card: 'Ace', suit: 'Hearts'},
  {card: 'Ace', suit: 'Diamonds'},
];

// shuffleCards.shuffle();
function shuffleCards(deck) {                          //2 created a function that takes deck aas parameter, randomize and sorts it.
  return deck.sort(() => 0.5 - Math.random());
}


let containerDiv = document.querySelector('.monte');
let shuffledDeck = shuffleCards(cards);   // assigned a callback function to variable, so we can use in a for loop.



function createCards() {   // create card funciton, which is loping, then a div, and adding a class list, .
  for (let i = 0; i < shuffledDeck.length; i ++) {


    let cardObj = document.createElement('div');
    cardObj.classList.add('card');
    console.log(cardObj);
    cardObj.setAttribute('data-name', `${shuffledDeck[i].suit}`)    /// added data-name so we can use it to comare the cards. string intepulation, attiching key value pair.

// cardObj


if (shuffledDeck[i].suit === 'Spades') {         // assisng css class
  cardObj.classList.add('spades');
} else if (shuffledDeck[i].suit === 'Hearts') {
  cardObj.classList.add('heart');
  console.log('this worked');
} else {
  cardObj.classList.add('diamond');
}

    cardObj.addEventListener("click", (e) => {
      // evt.preventDefault();

      console.log(`${shuffledDeck[i].card} of ${shuffledDeck[i].suit}`);
      e.target.classList.remove('shuffle-cards');
      e.target.classList.add('show-card');


      // check to see if when card is clicked the flip class is added.
      // check if what you clicked matches ace of spade
      if (e.target.dataset.name === 'Spades') {
        console.log(e.target)
        alert("you win");
        // e.target.style.transform = 'rotateY(180deg)';
        // alert("you won!");
      }
      else if (e.target.dataset.name !== 'Spades') {
        console.log(e.target)
        // alert("You Lose");
      // cardObj.classList.add('hide-card');
      // console.log("get lost");
      }
      else {
        alert("You lost your Money");
      }

    });

    containerDiv.appendChild(cardObj);
    // setTimeout(() => {
    //   // evt.preventDefault();  // prevents refreshing of page
    //   cardObj.classList.add('hide-card');
    // }, 1000);
    setTimeout(() => {
      cardObj.classList.add('shuffle-cards');

    }, 1000);

  }
}
createCards();
// mySound = new sound("gametheme.mp3");
// mySound.play();



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

  gamePot += gamePot; //doubles gamepot
  alert(`The pot is $${gamePot}`);
  alert(`You have a total of $${userMoney} remaining`);

  // Gets the elements that hold the userMoney and gamePot ID inside the HTML
  let money = document.getElementById('userMoney');
  let pot = document.getElementById('gamePot');

  // Adds following money amount to the html elements
  money.innerHTML = `User money ${userMoney}`;
  pot.innerHTML = `Game pot ${gamePot}`;

  // creating random index.
  // const randomSelect = Math.floor(Math.random() * cards.length);
  // console.log(cards[randomSelect]); // picks random card.
}

// let allCards = document.querySelectorAll(".card");
// console.log(allCards);


function playAudio(){
  // audioMp3.src = 'http://www.qingli.life/music/Beyond_Jupiter.mp3';
  audioMp3.src = 'assets/Malicious.mp3';

	audioMp3.play();
}


let replayButton = document.querySelector(".rePlay");
replayButton.addEventListener("click", function() {

  // location.reload();
  document.body.onload = createCards();

//   allCards.forEach((crd) => {
// console.log(card);
// card.style.transform = "rotateY(-180deg)";
// });
});
// audioMp3.play();
