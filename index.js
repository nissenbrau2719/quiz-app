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
let questionIndex = 0;
const questionNum = questionIndex + 1;
let picked = "";
let finalMessage = "";
const question = STORE[questionIndex].question;
const option1 = STORE[questionIndex].options[0];
const option2 = STORE[questionIndex].options[1];
const option3 = STORE[questionIndex].options[2];
const option4 = STORE[questionIndex].options[3];
const correctAnswer = STORE[questionIndex].answer;



function resetQuiz() {
  $('.quiz').html(`
  <legend>Welcome to the Beer Quiz!</legend>
  <p>Would you like to test your general beer and brewing knowledge?</p>
  <button id='start'>Start Quiz</button>
  `);
  $('.js-scorekeeping').addClass('hideScorekeeping');
  scoreTally = 0;
  questionIndex = 0;
}

function generateQuestion() {
  console.log('generated question');
  $('.quiz').html(
    `<fieldset>
      <legend class="js-renderQuestion">${question}</legend>

      <input type="radio" id="${option1}" name="question" value="${option1}">
      <label for="${option1}">${option1}</label><br>

      <input type="radio" id="${option2}" name="question" value="${option2}">
      <label for="${option2}">${option2}</label><br>
    
      <input type="radio" id="${option3}" name="question" value="${option3}">
      <label for="${option3}">${option3}</label><br>        

      <input type="radio" id="${option4}" name="question" value="${option4}">
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
  console.log('scorekeeping section updated');
  $('.js-scoreTally').text(scoreTally);
  $('.js-questionNum').text(questionNum);
}

function increaseScore() {
  console.log('point scored!')
  scoreTally++;
}

function incrementQuestion() {
  questionIndex++;
  console.log('moved to question number ' + questionNum);
}

function startQuiz() {
  console.log('quiz ready');
  $('.quiz').one('click', '#start', function(event){
    event.preventDefault();
    console.log('started the quiz')
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
    <p>Keep up the good work!</p>
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
    picked = ($('input[name=question]:checked').val());
  });
}

function submitAnswer() { 
  console.log('ran submitAnswer');
  $('form').on('click', '.submit', function(event) {
    event.preventDefault();
    if (picked === "") {
      alert("Please select an answer");
    } else if (picked === correctAnswer) {
      answeredCorrectly();
    } else {
      answeredWrong();
    }
    picked = "";
    });
    

  }

function finishedQuiz() {
  if (scoreTally < 4) {
    finalMessage = "Do you even like beer?";
  } else if (scoreTally < 8){
    finalMessage = "Not bad, you might be a little buzzed though...";
  } else {
    finalMessage = "Great job! You must work at a brewery";
  }
  $('main').last().remove();
  $('.js-scorekeeping').addClass('hideScorekeeping');
  $('.quiz').html(`
  <legend>You completed the Beer Quiz!</legend>
  <p>Your final score is ${scoreTally} points</p>
  <p>${finalMessage}</p>
  <p>Would you like to try the quiz again?</p>
  <button class='js-reset'>Restart Quiz</button>
  `);
  
}

function nextQuestion() {
  console.log('ran nextQuestion');
  $('form').on('click', '.js-next', function(event){
    event.preventDefault();
    incrementQuestion();
    if(questionNum > STORE.length) {
      finishedQuiz();
    } else {
      updateScorekeeping();
      generateQuestion(); 
    }    
  });
}

function handleReset() {
  $('main').on('click', '.js-reset', function(){
    resetQuiz();
    $('.js-reset').remove();
  });
}

function handleQuiz() {
  console.log('ran handleQuiz');
  resetQuiz();
  handleReset();
  startQuiz();
  submitAnswer();
  nextQuestion();
}

$(handleQuiz);