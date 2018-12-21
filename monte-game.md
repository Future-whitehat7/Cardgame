Three card money monte card game.

|  Day | Deliverable | Status
|---|---| ---|
|DEC 18th| Project Description | complete
|DEC 18th| Wireframes / Priority Matrix / Functional Components | complete
|DEC 19th| Core Application Structure (HTML, CSS, etc.) | complete
|DEC 19th| Pseudocode / actual code | complete
|DEC 20th| Initial Clickable Model  | Incomplete
|DEC 20th| MVP | complete
|DEC 21th| Present | inProgress

https://pages.git.generalassemb.ly/Futurewhitehat7/project-1-Monte-Game/monte-game/index.html

## Project Description
GAME- THREE CARD Money MONTE (card game).
- A very popular street card game which tests the memory of the player. There are three cards set up which includes the Ace of spades ,
the player is shown the card, a bet is placed, then the card is shuffled. the Player must select the right card to
win, or else they lose their money.

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.
1) https://res.cloudinary.com/algortihmtech-inc/image/upload/v1545150045/Proj1-Money%20Monte/Screen_Shot_2018-12-18_at_12.50.35_AM.png

2) https://res.cloudinary.com/algortihmtech-inc/image/upload/v1545150044/Proj1-Money%20Monte/Screen_Shot_2018-12-18_at_1.37.02_AM.png

3) https://res.cloudinary.com/algortihmtech-inc/image/upload/v1545150043/Proj1-Money%20Monte/Screen_Shot_2018-12-18_at_1.33.44_AM.png

4) https://res.cloudinary.com/algortihmtech-inc/image/upload/v1545150042/Proj1-Money%20Monte/Screen_Shot_2018-12-18_at_1.17.26_AM.png

5) https://res.cloudinary.com/algortihmtech-inc/image/upload/v1545150042/Proj1-Money%20Monte/Screen_Shot_2018-12-18_at_1.12.12_AM.png

6) https://res.cloudinary.com/algortihmtech-inc/image/upload/v1545150042/Proj1-Money%20Monte/Screen_Shot_2018-12-18_at_1.13.58_AM.png

7) https://res.cloudinary.com/algortihmtech-inc/image/upload/v1545150042/Proj1-Money%20Monte/Screen_Shot_2018-12-18_at_1.24.50_AM.png

8) https://res.cloudinary.com/algortihmtech-inc/image/upload/v1545150042/Proj1-Money%20Monte/Screen_Shot_2018-12-18_at_1.05.18_AM.png

9) https://res.cloudinary.com/algortihmtech-inc/image/upload/v1545151361/Proj1-Money%20Monte/priorityTime.jpg


## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- create an array of  3 cards(objects) (1)
- add click event to each card          (2)
- display the card detail when its clicked    (3)
- shuffle through the array                (4)
- (Figureout)- how to shuffle cards before they are dynamically created  (5)
- create message popup showing the cards details. 	(6)
- check to see if the card is clicked correctly	/ check for a match	(7)
- create a win / lose function.				(8)

#### Post MVP
- Add user auth						(9)
- show shuffle animation				(10)
- adding bootstrap to landing page		         (11)
- Add music 						(12)
add counter time 						(13)


## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

### Landing Page 
-when the page loads, a description of the game and how to play the game is shown. with the option to play game

### Game Initialization	
- load game and prompt user to enter their name, place a bet and start the game.

### Playing The Game 
- once users is shown the face of the card, its then flipped and ramdomly shuffles. leaving the player to click on a card when its done. 
user is prompted to place a bet greater or equal to starting bet price. 
user places bet, the pot winnigs is increased, the cards are shown, then flipped, then shuffled. the user must now select the correct card.

### Pause The Game 
- game pauses, until user returns to play game.

### Winning The Game
- if user clicked the right card, they win the gamee.
a win message pops up. then user can either double their money or leave.

### Lose The Game
- if user clicked on the wrong card, they lose the game.

### Resetting The Game
- prompt user to play again after game ends.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component 		| Priority 	| Estimated Time 	| Time Invetsted 	| Actual Time |
| --- |			 :---: |  	 :---: |	        :---: | 		:---: |
| 1	 		| H 		| 3hrs			|	3 		| 4	 |
| 2		 	| H 		| 3hrs			| 	3		| 3	 |
| 3		 	| H 		| 3hrs			| 	3		| 3	 |
| 4		 	| H 		| 3hrs			| 	3		| 3	 |
| 5		 	| H 		| 3hrs			| 	3		| 3	 |
| 6		 	| H 		| 3hrs			| 	 3		| 5	 |
| 7		 	| H 		| 3hrs			| 	3		| 4	 |
| 8		 	| H 		| 3hrs			|  	3		|  4      |
| 9		 	| H 		| 5hrs			| 	3		|4	 |





| Total 		| H 		| 38hrs			| 28hrs 			| 40hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.
-document.queryselector



| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  
I am proud of the classList.remove and add function.
```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
got the cards to flip,added a event listener on click, linked the pages together, added a music play button, and a few buttons for the game.
## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.
could not get the cards to shuffle from with css animation, the click event couldnt capture the click.
