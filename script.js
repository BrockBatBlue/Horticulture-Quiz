// variables
var score = 0;
var timeLeft = 30;
var questionArray = [
    //[Question, Array of Answers, Index of Correct Answer]
    ['What is the answer?',[],0]
    ['What is the answer?',[],0]
    ['What is the answer?',[],0]
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



// Function For moving from Start Page to Questions