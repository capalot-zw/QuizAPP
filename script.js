const questions = [
  {
    question: "Which ancient stone city, built between the 11th and 15th centuries, served as the capital of the Kingdom of Zimbabwe?",
    options: ["Khami Ruins", "Great Zimbabwe", "Dhlo-Dhlo", "Ziwa"],
    correctAnswer: "Great Zimbabwe",
    rationale: "This UNESCO World Heritage site is the largest collection of ruins in Africa south of the Sahara and gives the modern nation its name."
  },
  {
    question: "On which river is the Victoria Falls (Mosi-oa-Tunya) located, forming the border between Zimbabwe and Zambia?",
    options: ["Limpopo River", "Save River", "Zambezi River", "Pungwe River"],
    correctAnswer: "Zambezi River",
    rationale: "The Zambezi is Africa's fourth-longest river and is home to the world's largest falling sheet of water."
  },
  {
    question: "In what year did Zimbabwe officially gain independence from British colonial rule?",
    options: ["1965", "1980", "1975", "1994"],
    correctAnswer: "1980",
    rationale: "Following the Lancaster House Agreement, the country held elections and achieved recognized independence on April 18, 1980."
  },
  {
    question: "What is the capital city of Zimbabwe?",
    options: ["Bulawayo", "Mutare", "Harare", "Gweru"],
    correctAnswer: "Harare",
    rationale: "Harare is the political, economic, and cultural capital of Zimbabwe."
  },
  {
    question: "Which Zimbabwean national park is famous for its large elephant population?",
    options: ["Hwange National Park", "Matobo National Park", "Nyanga National Park", "Gonarezhou National Park"],
    correctAnswer: "Hwange National Park",
    rationale: "Hwange National Park is Zimbabwe’s largest national park and is well known for its elephants."
  },
  {
    question: "What is the official currency currently used in Zimbabwe alongside other foreign currencies?",
    options: ["Rand", "Pula", "Zimbabwe Gold (ZiG)", "Kwacha"],
    correctAnswer: "Zimbabwe Gold (ZiG)",
    rationale: "Zimbabwe introduced the Zimbabwe Gold currency, commonly called ZiG, in 2024."
  },
  {
    question: "Which mountain range is located in eastern Zimbabwe near the border with Mozambique?",
    options: ["Drakensberg Mountains", "Matobo Hills", "Eastern Highlands", "Chimanimani Hills"],
    correctAnswer: "Eastern Highlands",
    rationale: "The Eastern Highlands are known for their cool climate, forests, and scenic mountains."
  },
  {
    question: "Which Zimbabwean city is known as the 'City of Kings'?",
    options: ["Kadoma", "Bulawayo", "Masvingo", "Chinhoyi"],
    correctAnswer: "Bulawayo",
    rationale: "Bulawayo was historically associated with the Ndebele kings and kingdom."
  },
  {
    question: "Which lake, one of the largest man-made lakes in the world, lies partly in Zimbabwe?",
    options: ["Lake Malawi", "Lake Tanganyika", "Lake Kariba", "Lake Chad"],
    correctAnswer: "Lake Kariba",
    rationale: "Lake Kariba was created after the construction of the Kariba Dam on the Zambezi River."
  },
  {
    question: "What is the name of the traditional Zimbabwean staple food made from maize meal?",
    options: ["Sadza", "Pap", "Ugali", "Nshima"],
    correctAnswer: "Sadza",
    rationale: "Sadza is the staple food eaten across Zimbabwe, often served with meat and vegetables."
  }
]
let currentIndex = 0;
let score = 0;
const button = document.querySelector(".submit");

function renderQuestion(){
  const questionText = document.querySelector(".question");

  const optionsList = document.querySelector(".options");
  
const feedback = document.querySelector('.feedback');
  
  feedback.innerHTML= "";
  optionsList.innerHTML = "";


  questionText.textContent = questions[currentIndex].question;
  questions[currentIndex].options.forEach(option => {
  optionsList.innerHTML += `<li>
  <input type="radio" name="quizOption" value="${option}">
  ${option}
  </li>`;
});}

renderQuestion()

  function checkSelection() {
  const selectedBtn = document.querySelector('input[name="quizOption"]:checked');
  const feedback = document.querySelector('.feedback');
  if(selectedBtn) {
  const correct = questions[currentIndex].correctAnswer;
  if(selectedBtn.value !== correct){
    feedback.textContent = `wrong ❌,correct answer is: ${correct}"`;}else{score++
      feedback.textContent = 'correct✅'
    }
  } else {
    console.log("No option selected yet!");
    
  };
 }


function nextQuestion() {
  const questionNumber = document. querySelector(".questionNumber");
    questionNumber.innerText = `Question ${currentIndex + 2}`;
  currentIndex++;

  if (currentIndex >= questions.length) {
    document.querySelector("main").innerHTML = `
      <h2>Quiz Finished</h2>
    `;
    document.querySelector('main').innerHTML += 
    `<h2>score: ${score}</h2>`;
    return;
  }
  renderQuestion();
}

document.querySelector('.submit').addEventListener('click', checkSelection);
document.querySelector('.submit').addEventListener('click', createNextButton);
const btn = document.querySelector('.submit');
btn.addEventListener('click', () => {
  btn.disabled = true;
  const nextButton = document.querySelector(".next");
  btn.addEventListener("click", ()=> {
    nextButton.disabled = false;
  });
}
)


function createNextButton() {
  if (document.querySelector(".next")) return;

  const buttonsGrid = document.querySelector(".buttonsGrid");

  const nextButton = document.createElement("button");
  nextButton.innerText = "Next →";
  nextButton.className = "next";

  buttonsGrid.appendChild(nextButton);

  const btn = document.querySelector(".submit");
   nextButton.addEventListener("click", ()=> {
    nextButton.disabled = true;
  });
  nextButton.addEventListener("click", nextQuestion);
  nextButton.addEventListener("click", () => {
    btn.disabled = false;
  const nextdisable = document.querySelector(".next")
  });
}

