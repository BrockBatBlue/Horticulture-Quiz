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

    // Select All Sections
    var sectionArray = document.querySelectorAll("section");
    // Turn Off All Sections
    for(i=0; i<sectionArray.length; i++) {
        sectionArray[i].style.setProperty("display","none","important");
    }
    // Select HighScore Section
    var highScoreSection = document.getElementById("highScores");
    
    // Turn On HighScore Section
    highScoreSection.style.display = null;
    // Hide View High Score Button
    var highScoreButton = document.getElementById("viewHighScore");
    highScoreButton.style.setProperty("display","none");
}
// Add on-click event for viewHighScore button
var highScoreButton = document.getElementById("viewHighScore");
highScoreButton.addEventListener("click", viewHighScorePage);



// Function For moving from Start Page to Questions