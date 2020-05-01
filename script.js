// variables
var score = 0;
var timeLeft = 30;
//[Question number, Question, Array of Answers, Index of Correct Answer]
var questionArray = [
    [1,'What is the answer?',[],0],
    [2,'What is the answer?',[],0],
    [3,'What is the answer?',[],0]
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
// Add on-click event for viewHighScore button
var highScoreButton = document.getElementById("viewHighScore");
highScoreButton.addEventListener("click", viewHighScorePage);

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
    
    console.log(question);

   showElement("question");
}

// Function Start Quiz
var startQuiz = function(){
// must hide every section
    hideEverySection();
// show first question section
    showQuestionPage(questionArray[0]);
//  Start Timer
    // startTimer();
}
var startQuizButton = document.getElementById("startQuizButton");
startQuizButton.addEventListener("click", startQuiz);