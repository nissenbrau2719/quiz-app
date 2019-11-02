// this app should render a welcome screen and a button to start the quiz

// once clicking start, the app should show the first question and a set of
// 4 options to choose as an answer with a submit button. there should also
// be a button to reset the quiz.

// the app should also track your score and what question you are on once
// you have started the quiz. this should update after answering each question

// if you answer a question correctly, render a cheers pic and congrats message

// if you answer a question wrong, render a spilled beer pic and show correct answer

// once all questions are answered, the app should show a final score and ask
// if you would like to try again with the reset button

function startQuiz() {
  console.log('ran startQuiz');
  // this should add an event listener to the start quiz button, and on click
  // should render the first question/answer set and submit button in the quiz form. 
  // it should also render the scorekeeping section on the page

}

function submitAnswer() { 
  console.log('ran submitAnswer');
  // this should add an event listener to the submit button, and on click should check
  // to see if the selected answer matches the correct one. it should display an alert 
  // window notifying if the answer is correct, or one displaying the correct answer 
  // if it is not correct. the alert window should have the next question button

}

function nextQuestion() {
  console.log('ran nextQuestion');
  // this should have an event listener for the next question button. on click, it should
  // close the alert window and render the next question/answer set in the form. it should
  // also update the scorekeeping section to reflect the current score and question number
  // if you have answered all the questions, this should take you to the ending page with
  // your final score

}

function resetQuiz() {
  console.log('ran resetQuiz');
  // this should add an event listener to the reset quiz button. on click, it should take
  // clear the scorekeeping section and take you back to the starting page of the quiz

}

function makeQuiz() {
  console.log('ran makeQuiz');
  //this should run all the previous functions

}