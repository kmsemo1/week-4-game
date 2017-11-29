// VARIABLES


//====================================================================================================
// START OF GAME GENERATE A NUMBER FOR COMPUTER'S PICK 

//generate #computer-pick number
var compNumber = Math.floor(Math.random() * 120 + 19);
console.log(compNumber);
//display #computer-pick number 
$("#computer-pick").html(compNumber);

//====================================================================================================
// START OF GAME GENERATE A NUMBER FOR ALL 4 CRYSTALS

// generate a number for #button-1
// when #button-1 is clicked
// add the generated number to #result

// generate a number for #button-2
// when #button-2 is clicked
// add the generated number to #result

// generate a number for #button-3
// when #button-3 is clicked
// add the generated number to #result

// generate a number for #button-4
// when #button-4 is clicked
// add the generated number to #result

//====================================================================================================
//END OF GAME

// wait until #result === #computer-pick or #result > #computer-pick
// generate a new number for #computer-pick
// restart counter for #result

// if #result === #computer-pic 
// add +1 to total wins
// display "you won" message


// if #result > #computer-pick
// add +1 to total loss
// display "you lose" message