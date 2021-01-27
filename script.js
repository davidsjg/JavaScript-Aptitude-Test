//questions
//choices
//clock
//game over

//Capturing references to elements and storing them in variables 
var timeEl = document.querySelector(".time");
var questionEl = document.querySelector(".question");
var answersEl = document.querySelector(".possAnswers");
var displayCorrEl = document.querySelector(".dispCorr")
var startQuizBtn = document.getElementById("startQuiz");

var button1 = document.querySelector(".btn1");
var button2 = document.querySelector(".btn2");
var button3 = document.querySelector(".btn3");
var button4 = document.querySelector(".btn4");

var questionsArr = ["when was javascript invented?", "is javascript fun?"];
var aSet = ["1928", "no"]
var bSet = ["1955", "no"]
var cSet = ["1966", "no"]
var dSet = ["1995", "yes"]

var i = 0;
var answerClick;


initiate();


function initiate () {
  button1.textContent = "";
  button2.textContent = "";
  button3.textContent = "";
  button4.textContent = "";
  answersEl.hidden = true;
}

var startQuiz = document.querySelector("#startQuiz");

function questionClick (index) {

  button1.addEventListener("click", function() {
  
    return 1; 

  });
  button2.addEventListener("click", function() {
    return 2; 
  
  });
  button3.addEventListener("click", function() {
    return 3; 
  
  });
  button4.addEventListener("click", function() {
    return 4; 
  
  });


}

function compareQuesAnswer (answer) {
  console.log(answer);
  console.log("you are in compareQuesAnswer");
}

function displayQuestions () {
    questionEl.textContent = questionsArr[i];
    button1.textContent = aSet[i];
    button2.textContent = bSet[i];
    button3.textContent = cSet[i];
    button4.textContent = dSet[i];
    var userSelect = questionClick();
    console.log("userSelect = " + userSelect);
    compareQuesAnswer(userSelect);
}

startQuiz.addEventListener("click", function() {
  //begin countdown timer for quiz
  setTime();
  //hide start quiz button and show answersEl
  answersEl.hidden = false;
  startQuizBtn.hidden = true;
  displayQuestions();


});



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



// document.getElementById("startQuiz");
//         .addEventListener("click", function() {
//   document.getElementById("welcome").hidden = true;
//   document.getElementById("awesome").hidden = false;
// }, false);

// function sendMessage() {
//   timeEl.textContent = " ";
//   var imgEl = document.createElement("img");
//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }



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

//JS


//Data - Questions

//Global Vars 

//Functions 

//Event Listeners 
// Access toggle switch HTML element