//console.log("Hello everybody");
var chalk=require('chalk');

var readlineSync = require("readline-sync");

var score = 0;


var userName = readlineSync.question(chalk.white.bgBlue.bold("What's your name? "));

console.log(chalk.red.bgBlue.bold("Welcome "+ userName + " lets have a startup quiz?"));

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("Nice!");
    score = score + 1;
    
  } else { 
    console.log("uhh oh!");
   
  }

  console.log("current score: ", score);
  console.log(chalk.blue.bgWhite.bold("-+-+-+-+-+-+-+-"))
}

// array of objects
var questions = [{
  question: "What was the lastname of flipkart founders? ",
  answer: "Bansal"
}, {
  question: "Who accquired the majority stake in flipkart? ",
  answer: "Walmart"
},
{
  question: "Walmart is colaborating with which major indian company to make a superapp(like Gojek)? ",
  answer: "Tata"
},
{
  question: "Name of the subsidiary handling the superapp division? ",
  answer: "Tata Digital"
}
];

// loop
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("You SCORED: ", score);
