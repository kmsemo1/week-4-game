// VARIABLES
// user total
var total = 0;


//generate #computer-pick number
var compNumber = Math.floor((Math.random() * 120) + 19);
console.log(compNumber);
//display #computer-pick number 
$("#computer-pick").html(compNumber);

// generate a random number for #button-1
var btnOne = Math.floor((Math.random() * 12) + 1);
console.log(btnOne);

// generate a random number for #button-2
var btnTwo = Math.floor((Math.random() * 12) + 1);
console.log(btnTwo);

// generate a random number for #button-3
var btnThree = Math.floor((Math.random() * 12) + 1);
console.log(btnThree);

// generate a random number for #button-4
var btnFour = Math.floor((Math.random() * 12) + 1);
console.log(btnFour);

//====================================================================================================
// START OF GAME GENERATE A NUMBER FOR COMPUTER'S PICK 
$(document).ready(function () {
    // win total
    var win = 0;
    // loss total
    var loss = 0;
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
        if(total >= compNumber){
        // if #result === #computer-pic 
        if (total === compNumber) {
            // add +1 to total wins
            win++;
            // display number of wins 
            $("#Win").html("Wins: " + win);
            // restart user total and compNumber
        }

        // else if #result > #computer-pick
        else if (total > compNumber) {
            // add +1 to total loss
            loss++;
            // display number of  losses
            $("#Loss").html("Loss: " + loss);
            // restart user total and compNumber
        }
        }
    });

    // when #button-2 is clicked
    $("#button-2").on("click", function () {
        // add the generated number to #result
        total += btnTwo;
        //display total
        $("#result").html(total);
        console.log(total);

        if(total >= compNumber){
            // if #result === #computer-pic 
            if (total === compNumber) {
                // add +1 to total wins
                win++;
                // display number of wins 
                $("#Win").html("Wins: " + win);
                // restart user total and compNumber
            }
    
            // else if #result > #computer-pick
            else if (total > compNumber) {
                // add +1 to total loss
                loss++;
                // display number of  losses
                $("#Loss").html("Loss: " + loss);
                // restart user total and compNumber
            }
            }
    });

    // when #button-3 is clicked
    $("#button-3").on("click", function () {
        // add the generated number to #result
        total += btnThree;
        //display total
        $("#result").html(total);
        console.log(total);

        if(total >= compNumber){
            // if #result === #computer-pic 
            if (total === compNumber) {
                // add +1 to total wins
                win++;
                // display number of wins 
                $("#Win").html("Wins: " + win);
                // restart user total and compNumber
            }
    
            // else if #result > #computer-pick
            else if (total > compNumber) {
                // add +1 to total loss
                loss++;
                // display number of  losses
                $("#Loss").html("Loss: " + loss);
                // restart user total and compNumber
            }
            }
    });

    // when #button-4 is clicked
    $("#button-4").on("click", function () {
        // add the generated number to #result
        total += btnFour;
        //display total
        $("#result").html(total);
        console.log(total);

        if(total >= compNumber){
            // if #result === #computer-pic 
            if (total === compNumber) {
                // add +1 to total wins
                win++;
                // display number of wins 
                $("#Win").html("Wins: " + win);
                // restart user total and compNumber
            }
    
            // else if #result > #computer-pick
            else if (total > compNumber) {
                // add +1 to total loss
                loss++;
                // display number of  losses
                $("#Loss").html("Loss: " + loss);
                // restart user total and compNumber
            }
            }
    });


});
//====================================================================================================
//END OF GAME












//reset using .empty()