//questions
//choices
//clock
//game over

//Capturing references to elements and storing them in variables 
var timeEl = document.querySelector(".time");
var questionEl = document.querySelector(".question");
var answersEl = document.querySelector(".quiz");
var displayCorrEl = document.querySelector(".dispCorr")
var startQuizBtn = document.getElementById("startQuiz");

var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");
var button4 = document.getElementById("btn4");



var questionsArr = ["when was javascript invented?", "is javascript fun?"];
var aSet = ["1928", "no"]
var bSet = ["1955", "no"]
var cSet = ["1966", "no"]
var dSet = ["1995", "yes"]

var answersArr = ["d","d"]

var i = 0;
var answerClick = 0;


initiate();
//clears the values and sets 
function initiate () {
  button1.textContent = "";
  button2.textContent = "";
  button3.textContent = "";
  button4.textContent = "";
  answersEl.hidden = true;
}

var secondsLeft = 60;
//Countdown timer function 
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


//event listener to listen to start button.  Quiz begins when button is clicked, and displayQuestions()
startQuiz.addEventListener("click", function() {
  //begin countdown timer for quiz
  setTime();
  //hide start quiz button and show answersEl
  answersEl.hidden = false;
  startQuizBtn.hidden = true;
  displayQuestions();

});

function questionClick() {
  
  answersEl.addEventListener("click", function() {
    if (button1) {
      console.log("you chose button 1")
      document.getElementById("btn1")
    } else if (button2){
      console.log("you chose button 2")
    }


  });
}



questionClick();
console.log("answerClick is = " + answerClick);







function displayQuestions () {
    questionEl.textContent = questionsArr[i];
    button1.textContent = aSet[i];
    button2.textContent = bSet[i];
    button3.textContent = cSet[i];
    button4.textContent = dSet[i];

    button1.addEventListener("click", checkAnswer);
    button2.addEventListener("click", checkAnswer);
    button3.addEventListener("click", checkAnswer);
    button4.addEventListener("click", checkAnswer);

    checkAnswer();
}

function checkAnswer(answer) {
  if (answer === answersArr[i]) {
    i++
    displayQuestions()

  } else {
    secondsLeft = secondsLeft - 10
    displayQuestions()
  }
console.log("you are in check answer")

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

// var startQuiz = document.querySelector("#startQuiz");

//THIS IS WHERE I STOPPED TUESDAY NIGHT.  GETTING UNDEFINED RETURNED FROM THESE FUNCTIONS.  
//IF WE CAN get a number returned, it would be huge.  compare that to answers 
// function questionClick (index) {

//   button1.addEventListener("click", function() {
  
//     if (button1){
//     console.log(button1 + " button was clicked"); 
//     }
//   });
//   button2.addEventListener("click", function() {
//     return 2; 
  
//   });
//   button3.addEventListener("click", function() {
//     return 3; 
  
//   });
//   button4.addEventListener("click", function() {
//     return 4; 
  
//   });
// }

  //   if (button1.nodeValue) {
  //   return 1;
  //   } else if (button2.nodeValue) {
  //   return 2;
  //   } else if (button3.nodeValue) {
  //   return 3;
  //   } else if (button4.nodeValue) {
  //   return 4;
  //   }
  // }



// function compareQuesAnswer (answer) {
//   console.log(answer);
//   console.log("you are in compareQuesAnswer");
// }

// function clearButtonValues() {
//   button1.setAttribute.
// }
// button1.addEventListener("click", function(){
//   console.log("button 1 was clicked");
//   answerClick = 1;
//   console.log(answerClick);
//   return answerClick;

// })
// button2.addEventListener("click", function(){
//   console.log("button 2 was clicked");
//   answerClick = 2;
//   console.log(answerClick);
//   return answerClick;

// })
// button3.addEventListener("click", function(){
//   console.log("button 3 was clicked");
//   answerClick = 3;
//   console.log(answerClick);
//   return answerClick;

// })
// button4.addEventListener("click", function(){
//   console.log("button 4 was clicked");
//   answerClick = 4;
//   console.log(answerClick);
//   return answerClick;

// })
