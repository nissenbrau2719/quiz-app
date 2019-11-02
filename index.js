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


const STORE = [
  {
    question: "Which country drinks the most beer per capita?",
    options: [ 
      "USA", 
      "Czech Republic",
      "Ireland",
      "Vietnam"
    ],
    answer: "Czech Republic"
  },
  {
    question: "In which year was the beer can produced?",
    options: [
      "1925",
      "1905",
      "1910",
      "1935"
    ],
    answer: "1935"
  },
  {
    question: "Lager comes from which German word?",
    options: [
      "Langsam, meaning 'slowly'",
      "Lagern, meaning 'to store'",
      "Lagune, meaning 'lagoon'",
      "Lage, meaning 'position'"
    ],
    answer: "Lagern, meaning 'to store'"
  },
  {
    question: "What does IPA stand for?",
    options: [
      "Imperial Pale Ale",
      "Intense Pale Ale",
      "India Pale Ale",
      "International Pale Ale"
    ],
    answer: "India Pale Ale"
  },
  {
    question: "Which is the world's biggest beer brand?",
    options: [
      "Snow",
      "Guiness",
      "Heineken",
      "Budweiser"
    ],
    answer: "Snow"
  },
  {
    question: "Which of these is NOT a type of beer?",
    options: [
      "Gueze",
      "Sahti",
      "Cyser",
      "Gratzer"
    ],
    answer: "Cyser"
  },
  {
    question: "In the brewing process, the fermentation step turns sugar into alcohol and what else?",
    options: [
      "Carbon Dioxide",
      "Bitterness",
      "Nitrogen",
      "Starch"
    ],
    answer: "Carbon Dioxide"
  },
  {
    question: "A traditional geuze tastes mostly…",
    options: [
      "Sour",
      "Sweet",
      "Roasty",
      "Bitter"
    ],
    answer: "Sour"
  },
  {
    question: "What causes skunked beer?",
    options: [
      "Under-attenuation",
      "Dirty tap lines",
      "Stuck mash",
      "Exposure to light"
    ],
    answer: "Exposure to light"
  },
  {
    question: "Which of these is NOT a variety of hops?",
    options: [
      "Amarillo",
      "Victory",
      "Huell Melon",
      "Tomahawk"
    ],
    answer: "Victory"
  }
]

let scoreTally = 0;
let questionNum = 1;

function generateQuestion() {
  console.log('ran generateQuestion');
  // this should render the question/answer set in the form
  $('.quiz').append(
    `<fieldset>
      <legend class="js-renderQuestion">Question goes here</legend>

      <input type="radio" id="option1" name="question#" class="js-option1">
      <label for="option1">option 1</label><br>

      <input type="radio" id="option2" name="question#" class="js-option2">
      <label for="option2">option 2</label><br>
    
      <input type="radio" id="option3" name="question#" class="js-option3">
      <label for="option3">option 3</label><br>        

      <input type="radio" id="option4" name="question#" class="js-option4">
      <label for="option4">option 4</label><br>

      <button type="submit" class="submit">Submit</button>
    </fieldset>`
  );
}

function showScorekeeping() {
  $('.js-scorekeeping').toggleClass('scorekeeping');
}

function updateScorekeeping() {
  console.log('scorekeeping updated');
  $('.js-scoreTally').text(scoreTally);
  $('.js-questionNum').text(questionNum);
}

function increaseScore() {
  console.log('point scored!')
  scoreTally++;
}

function incrementQuestion() {
  console.log('question completed');
  questionNum++;
}

function startQuiz() {
  console.log('ran startQuiz');
  // this should add an event listener to the start quiz button, and on click
  // should render the first question/answer set and submit button in the quiz form. 
  // it should also render the scorekeeping section on the page
  $('.quiz').on('click', '#start', function(){
    $('.quiz').empty();
    generateQuestion();
    showScorekeeping();
  })
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
  startQuiz();
  
}

$(makeQuiz);