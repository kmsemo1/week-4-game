// VARIABLES


// add total array
// display total
var total = 0;


// generate a random number for #button-1
var btnOne = Math.floor((Math.random() * 12) + 1);
console.log(btnOne);

// generate a random number for #button-2
var btnTwo = Math.floor((Math.random() * 12) + 1);
console.log(btnTwo);

// generate a random number for #button-3
var btnThree = Math.floor((Math.random() * 12) + 1);
console.log(btnThree);

//====================================================================================================
// START OF GAME GENERATE A NUMBER FOR COMPUTER'S PICK 
$(document).ready(function () {
    //generate #computer-pick number
    var compNumber = Math.floor((Math.random() * 120) + 19);
    console.log(compNumber);
    //display #computer-pick number 
    $("#computer-pick").html(compNumber);

    //====================================================================================================
    // START OF GAME GENERATE A NUMBER FOR ALL 4 CRYSTALS


    // when #button-1 is clicked
    $("#button-1").on("click", function () {
        // add increment result of btnOne into total
        // add the generated number to #result
        total += btnOne;

        //display total
        $("#result").html(total);
        console.log(total);
    });

    // when #button-2 is clicked
    $("#button-2").on("click", function () {
        // add the generated number to #result
        total += btnTwo;
        //display total
        $("#result").html(total);
        console.log(total);
    });

    $("#button-3").on("click", function () {
        // add the generated number to #result
        total += btnThree;
        //display total
        $("#result").html(total);
        console.log(total);
    });

    // generate a number for #button-4
    // when #button-4 is clicked
    // add the generated number to #result
});
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

//reset using .empty()