//generalised object that can be used to hold data for any of the 3 states. see readme for more
function AnswerObj(answers = [], saved = false, newEntry = false) {
  this.answers = answers;
  this.saved = saved;
  this.newEntry = newEntry;
}

//deep copies an AnswerObj object
const copyAnswerObj = (obj) => {
  let newObj = new AnswerObj(
    obj.answers.map((a) => Object.assign({}, a)),
    obj.saved,
    obj.newEntry
  );
  return newObj;
};

//shortens by a couple of lines the state return
const returnStateObj = (newState, stateKey) => {
  let returnObj = {};
  returnObj[stateKey] = newState;
  return returnObj;
};

//figures out which state the element corresponds to
const getStateAttr = (elem) => {
  return elem.closest("form").getAttribute("state");
};

//determines which entry the element corresponds to
const getEntryOrder = (elem) => {
  return parseInt(
    elem.closest(".group-order-indicator").getAttribute("grouporder")
  );
};

export {
  AnswerObj,
  copyAnswerObj,
  returnStateObj,
  getStateAttr,
  getEntryOrder,
};
