//questions
//choices
//clock
//game over

// Access mulitple elements by ID using .querySelector()
var timeEl = document.querySelector(".time");
var questionEl = document.querySelector(".question");
var answersEl = document.querySelector(".possAnswers");

questionEl.textContent = "This is where questions will go"
answersEl.textContent = "this is where potential answrs will go"



//JS


//Data - Questions

//Global Vars 

//Functions 

//Event Listeners 
// Access toggle switch HTML element


var startQuiz = document.querySelector("#startQuiz");

// Set default mode to dark
var mode = "dark";

// Listen for a click event on toggle switch
startQuiz.addEventListener("click", function() {
  //begin countdown timer for quiz
  setTime();
  disp


});

//function startQuiz
//function quesitons 
//function questionClick
//


//click start button
//ref startBtn on DOM
//add onclick event 

//start timer
//ref timerEl on DOM
//use of interval
// Selects element by class



var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining in the quiz.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
    //   sendMessage();
    }

  }, 1000);
}


// function sendMessage() {
//   timeEl.textContent = " ";
//   var imgEl = document.createElement("img");
//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }




//display questions and choices 
//ref DOM
//loop through my quesiotns 
//display quesiotns on DOM
//loop through choices 
//display each choice on DOM

//chcek answer against choice 
//if answer is correct, show next question
//if incorrect, subtract time 
//when all quesitons answered, game over 
//when time reacehes zero, game over 