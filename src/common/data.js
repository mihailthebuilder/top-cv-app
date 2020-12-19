//the container for the question
function QuestionObj(questionLabel) {
  this[questionLabel] = [];
}

//the container for an answer. will be used when html input element is in focus
function AnswerObj() {
  this.values = {};
  this.saved = false;
}

//list of questions in the form
const QUESTION_LIST = ["name", "email"];

//initialises the list of questions for setting up the initial state
function InitalizeQuestionList() {
  let arr = [];

  for (let i = 0; i < QUESTION_LIST.length; i++) {
    let question = new QuestionObj(QUESTION_LIST[i]);
    arr.push(question);
  }

  return arr;
}

export { InitalizeQuestionList, AnswerObj };
