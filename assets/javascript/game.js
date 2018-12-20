//Variables for jQuery elements

var winsDisplay = $("#wins");
var lossDisplay = $("#losses");
var goalDisplay = $("#goal");
var scoreDisplay = $("#score");
var blueDisplay = $("#blue-gem");
var redDisplay = $("#red-gem");
var greenDisplay = $("#green-gem");
var purpleDisplay = $("#purple-gem");
var startButton = $("#start-btn");
var resetButton = $("#reset-btn");

//Variables to keep track of statistics
var wins = 0;
var losses = 0;
var score = 0;
var goal;
var blueVal;
var redVal;
var greenVal;
var purpleVal;

//A boolean to track whether or not the game is running
var gameRunning = false;

//Function to initialize page
var initialize = function() {

    //Updates the html with new values using jQuery
    winsDisplay.html(wins);
    lossDisplay.html(losses);
    goalDisplay.html("N/A");
    scoreDisplay.html(score);
}

var newGame = function(){

    score = 0;

    //Sets the score the player must reach
    goal = Math.ceil(Math.random() * 102) + 18;

    //Sets the value of the each gem
    blueVal = Math.ceil(Math.random() * 12);
    redVal = Math.ceil(Math.random() * 12);
    greenVal = Math.ceil(Math.random() * 12);
    purpleVal = Math.ceil(Math.random() * 12);

    updateDisplay();
}

var updateDisplay = function() {
    //Updates the html with new values using jQuery
    winsDisplay.html(wins);
    lossDisplay.html(losses);
    goalDisplay.html(goal);
    scoreDisplay.html(score);
}

var checkWin = function() {

    console.log(score === goal);

    if(score === goal) {
        wins++;
        console.log(wins);
        updateDisplay();
        gameRunning = false;
    } 
    
    else if (score > goal) {
        losses++;
        updateDisplay();
        gameRunning = false;
        
    }
}

startButton.on("click", function() {
    if(!gameRunning){
        newGame();
        gameRunning = true;
    }
});

resetButton.on("click", function() {

    if(gameRunning){
        losses++;
        newGame();
    }
});

blueDisplay.on("click", function(){

    if(gameRunning){
        score += blueVal;
        console.log(goal);
        console.log(score);
        checkWin();
        updateDisplay();
    }
});

redDisplay.on("click", function(){


    
    if(gameRunning){
        score += redVal;
        console.log(goal);
        console.log(score);
        checkWin();
        updateDisplay();
    }
});

greenDisplay.on("click", function(){
    
    if(gameRunning){
        score += greenVal;
        console.log(goal);
        console.log(score);
        checkWin();
        updateDisplay();
    }
});

purpleDisplay.on("click", function(){
    
    if(gameRunning){
        score += purpleVal;
        console.log(goal);
        console.log(score);
        checkWin();
        updateDisplay();
    }
});


initialize();
