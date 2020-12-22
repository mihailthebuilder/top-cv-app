function AnswerObj(answers = [], saved = false, newEntry = false) {
  this.answers = answers;
  this.saved = saved;
  this.newEntry = newEntry;
}

const copyAnswerObj = (obj) => {
  let newObj = new AnswerObj(
    obj.answers.map((a) => Object.assign({}, a)),
    obj.saved,
    obj.newEntry
  );
  return newObj;
};

const returnStateObj = (newState, stateKey) => {
  let returnObj = {};
  returnObj[stateKey] = newState;
  return returnObj;
};

function getStateAttr(elem) {
  return elem.closest("form").getAttribute("state");
}

export { AnswerObj, copyAnswerObj, returnStateObj, getStateAttr };
