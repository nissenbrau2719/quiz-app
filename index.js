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
      "Lagern, meaning 'to STORE'",
      "Lagune, meaning 'lagoon'",
      "Lage, meaning 'position'"
    ],
    answer: "Lagern, meaning 'to STORE'"
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
let qIndex = 0;
let picked = "";
const question = STORE[qIndex].question;
const option1 = STORE[qIndex].options[0];
const option2 = STORE[qIndex].options[1];
const option3 = STORE[qIndex].options[2];
const option4 = STORE[qIndex].options[3];
const correctAnswer = STORE[qIndex].answer;
const startHTML = `<legend>Welcome to the Beer Quiz!</legend>
<p>Would you like to test your general beer and brewing knowledge?</p>
<button id='start'>Start Quiz</button>`


function resetQuiz() {
  $('.quiz').html(`
  <legend>Welcome to the Beer Quiz!</legend>
  <p>Would you like to test your general beer and brewing knowledge?</p>
  <button id='start'>Start Quiz</button>
  `);
  $('.js-scorekeeping').addClass('hideScorekeeping');
  scoreTally = 0;
  questionNum = 1;
  qIndex = 0;
}

function generateQuestion() {
  console.log('ran generateQuestion');
  // this should render the question/answer set in the form
  $('.quiz').html(
    `<fieldset>
      <legend class="js-renderQuestion">${question}</legend>

      <input type="radio" id="${option1}" name="question" class="js-option1">
      <label for="${option1}">${option1}</label><br>

      <input type="radio" id="${option2}" name="question" class="js-option2">
      <label for="${option2}">${option2}</label><br>
    
      <input type="radio" id="${option3}" name="question" class="js-option3">
      <label for="${option3}">${option3}</label><br>        

      <input type="radio" id="${option4}" name="question" class="js-option4">
      <label for="${option4}">${option4}</label><br>

      <button type="submit" class="submit">Submit</button>
    </fieldset>`
  );
}



function showScorekeeping() {
  console.log('showing scorekeeping section');
  $('.js-scorekeeping').removeClass('hideScorekeeping');
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
    event.preventDefault();
    generateQuestion();
    showScorekeeping();
    selectAnswer();
    $('main').append(`<button class='js-reset'>Restart Quiz</button>`)
  });
}

function answeredCorrectly() {
  $('.quiz').html(`
    <legend>You are correct!</legend><br>
    <img class="fit" src="https://www.history.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_860/MTU4NTE1Nzg2MDcwMTA3Mzk0/beer-oldest.webp"
    alt="two glasses of beer in a 'cheers' position">
    <button class="js-next">Next Question</button>
  `);
  increaseScore();
  updateScorekeeping();
}

function answeredWrong(){
  $('.quiz').html(`
    <legend>Better luck next time!</legend><br>
    <img class="fit" src="https://lh4.googleusercontent.com/-Un-RwYd9iAU/TxHUAyxj71I/AAAAAAAAOv4/6rMaro9mJGI/s800/_MG_1212.JPG" alt="a spilled beer">
    <p>The correct answer was ${correctAnswer}</p>
    <button class="js-next">Next Question</button>
  `);
}

function selectAnswer() {
  $('.quiz').on('click', 'input[name=question]', function(){
    alert($('this').text());
  });
}

function submitAnswer() { 
  console.log('ran submitAnswer');
  // this should add an event listener to the submit button, and on click should check
  // to see if the selected answer matches the correct one. it should display an alert 
  // window notifying if the answer is correct, or one displaying the correct answer 
  // if it is not correct. the alert window should have the next question button
  $('form').submit(function(event) {
    event.preventDefault();
    console.log($('.quiz').children('input[name=question]:checked').val())
    // if($('.quiz').children('input[name=question]:checked').val() === correctAnswer) {
    //   answeredCorrectly();
    // } else {
    //   answeredWrong();
    // }
    
    });
    

  }


function nextQuestion() {
  console.log('ran nextQuestion');
  // this should have an event listener for the next question button. on click, it should
  // close the alert window and render the next question/answer set in the form. it should
  // also update the scorekeeping section to reflect the current score and question number
  // if you have answered all the questions, this should take you to the ending page with
  // your final score

}

function handleReset() {
  $('main').on('click', '.js-reset', function(){
    resetQuiz();
    $('.js-reset').remove();
  });
}

function handleQuiz() {
  console.log('ran handleQuiz');
  //this should run all the previous functions
  resetQuiz();
  handleReset();
  startQuiz();
  submitAnswer();
}

$(handleQuiz);