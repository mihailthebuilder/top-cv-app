//generalised object that can be used to hold data for any of the 3 states. see readme for more
function AnswerObj(answers = [], saved = false, newEntry = false) {
  this.answers = answers;
  this.saved = saved;
  this.newEntry = newEntry;
}

const copyFormData = (obj) => {
  return Object.entries(obj).reduce((newObj, [stateObjKey, stateObjValue]) => {
    newObj[stateObjKey] = new AnswerObj(
      stateObjValue.answers.map((a) => Object.assign({}, a)),
      stateObjValue.saved,
      stateObjValue.newEntry
    );
    return newObj;
  }, {});
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

export { AnswerObj, getStateAttr, getEntryOrder, copyFormData };
