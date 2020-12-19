//the container for an answer. will be used when html input element is in focus
function AnswerObj() {
  this.values = {};
  this.saved = false;
}

//list of questions in the form
const QUESTION_LIST = ["name", "email"];

//initialises the list of questions for setting up the initial state
function InitalizeQuestionsObj() {
  let obj = {};

  for (let i = 0; i < QUESTION_LIST.length; i++) {
    obj[QUESTION_LIST[i]] = [];
  }

  return obj;
}

export { InitalizeQuestionsObj, AnswerObj };
