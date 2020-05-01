// variables
var timeLeft = 100;
var currentQuestion = 0;
var timerInterval
//[Question number, Question, Array of Answers, Index of Correct Answer]
var questionArray = [
    [1,"When do you need growth hormone for your cuttings to produce roots?",["Always","Sometimes","Certain Plants", "Never"],3],
    [2,"How long should you wait to check for rooting?",["Two Days","Two Weeks","Four Weeks","Two Months"],1],
    [3,"What is one way to check if the cutting has rooted before disturbing the soil?",["Check for new leaf growth","Check Soil Temperature","Check humidity","Check stem thickness"],0]
]
var highScoreRecord = localStorage.getItem("highScores");

// Function for View High Score Button Change Page
var viewHighScorePage = function(){
    hideEverySection();
    showElement("highScores");
    // Hide View High Score Button
    var highScoreButton = document.getElementById("viewHighScore");
    highScoreButton.style.setProperty("display","none");
}

// general/shared functions
// Hide every section function
var hideEverySection = function(){
    // Select All Sections
    var sectionArray = document.querySelectorAll("section");
    // Turn Off All Sections
    for(i=0; i<sectionArray.length; i++) {
        sectionArray[i].style.setProperty("display","none","important");
    }
}
// Show id element function
var showElement = function(elementId) {
    // Select Element by ID 
    var element = document.getElementById(elementId);
    // Turn On Element
    element.style.display = null;
}

var showQuestionPage = function(question){
    var questionElement = document.getElementById("question");
    questionElement.children[0].children[0].innerText = "Question "+question[0];
    questionElement.children[1].children[0].innerText =  question[1];
    questionElement.children[2].children[0].innerText = question[2][0];
    questionElement.children[2].children[1].innerText = question[2][1];
    questionElement.children[2].children[2].innerText = question[2][2];
    questionElement.children[2].children[3].innerText = question[2][3]  
    showElement("question");
    currentQuestion = question[0];
}

// Function Start Quiz
var startQuiz = function(){
    // must hide every section
    hideEverySection();
    // show first question section
    showQuestionPage(questionArray[0]);
    //  Start Timer
    startTimer();
}

// Start Timer
var startTimer = function(){
    var timer = document.getElementById("timer")
    timer.children[0].children[0].innerText = timeLeft;
    showElement("timer");
    timerInterval = setInterval(function(){
        timeLeft--;
        if(timeLeft < 0){
            timeLeft = 0
        }
        timer.children[0].children[0].innerText = timeLeft;
    },1000)
}

// Next Question Function
var nextQuestion = function(event){
    var clickedAnswerIndex = event.target.id.substr(-1)-1;
    // Differentiate the Correct and Incorrect Button Clicked
    var correctAnswerIndex = questionArray[currentQuestion-1][3];
    if(correctAnswerIndex === clickedAnswerIndex){
        console.log("correct");
        // If correct, then add seconds
        correctAnswer();
        var lastQuestion = questionArray.length;
        // If it is the last question, then go to Initials page
        if(lastQuestion === currentQuestion){
            goToInitialsPage();
        } else {   
            // If not the last question, then go to next question
            hideEverySection();
            showQuestionPage(questionArray[currentQuestion]);         
        }        
    } else {
        console.log("Incorrect");
        // If incorrect, then subtract seconds
        incorrectAnswer();
    }    
}


var goToInitialsPage = function(){
    hideEverySection();
    var initialsPage = document.getElementById("initials");
    initialsPage.children[1].children[0].children[0].innerText = timeLeft;
    showElement("initials");
    stopTimer();
    var timer = document.getElementById("timer");
    timer.children[0].children[0].innerText = timeLeft;

}
var stopTimer = function(){
    clearInterval(timerInterval);
}
var correctAnswer = function(){
    timeLeft += 5;
}
var incorrectAnswer = function(){
    timeLeft -= 2;
}
// Event Listener Section:

// viewHighScore button
var highScoreButton = document.getElementById("viewHighScore");
highScoreButton.addEventListener("click", viewHighScorePage);

var startQuizButton = document.getElementById("startQuizButton");
startQuizButton.addEventListener("click", startQuiz);

// Answer EventListener
var answerButton1 = document.getElementById("answerButton1");
answerButton1.addEventListener("click", nextQuestion);

var answerButton2 = document.getElementById("answerButton2");
answerButton2.addEventListener("click", nextQuestion);

var answerButton3 = document.getElementById("answerButton3");
answerButton3.addEventListener("click", nextQuestion);

var answerButton4 = document.getElementById("answerButton4");
answerButton4.addEventListener("click", nextQuestion);