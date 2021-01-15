# CV Application

## Overview

The React front-end of a job application form. [Click here](https://mihailthebuilder.github.io/top-cv-app/) for live demo.

**Update** I had another look at the project and I feel like the way I configure the states ([see here](#state-configuration)) is sub-optimal. It would've definitely been been better if I created separate states for each of the 3 sections. Maybe I should've even moved each of them into the corresponding components as well ([see here](#component-structure)). [This project](https://github.com/mihailthebuilder/personal-site) shows a better way to handle states across child components.

## How it works

The form has 3 sections...

### General Info

Has name, email and phone number inputs which you can save and edit.

![general info](./demo/general-info.gif)

### Education

Has school, course, start date and end date inputs. You can add new entries and save the information.

![education add and save](./demo/education-add.gif)

You can also edit and delete existing entries.

![education edit and delete](./demo/education-edit.gif)

### Work Experience

Has employer, job title, main responsibilities, start date and end date inputs. You can perform the same actions as in the [Education](#education) section.

## Technical highlights

### State configuration

All of the information is managed from a single state called `formData` in [App.js](./src/App.js):

```js
const [formData, setFormData] = useState({
  /* generalInfo initialised with data because its input html 
    elements need to appear from the start. For the other 2 sections,
      the inputs are created when newEntry is triggered.
    */
  generalInfo: new AnswerObj([{ name: "", email: "", phone: "" }]),
  education: new AnswerObj(),
  jobs: new AnswerObj(),
});
```

`formData` has 3 keys, each corresponding to the 3 sections in the application form. Each key is initialised with an `AnswerObj` object, which also contains 3 keys:

- `answers` - an array of all the entries for a given section.
- `saved` - a Boolean that indicates whether section should be saved or made editable
- `newEntry` - a Boolean showing whether a new entry is being added

This configuration was one of the two key pieces that enabled me to develop state handling functions which can be applied for input changes across all 3 sections.

### Component structure

Having common state handling functions in [App.js](./App.js) also required me to think carefully about the structure of the components. The event listeners that triggered these functions had to figure out a way to distinguish between different states, entry groups (job #1 vs job #2) and inputs.

Here is a broad representation of the JSX rendered:

```jsx
//component that wraps the entire section. Same case for GeneralInfo and WorkExp
<Education>
  {/*this tells the state handling function which section we're looking at */}
  <form state="education">
    {/*grouporder points the entry (job #1, job #2, etc.) to the function*/}
    <div className="group-order-indicator" grouporder="0">
      {/*inputkey tells the function which input in that entry is being activated*/}
      <LineInput inputkey="school" />
      <LineInput inputkey="course" />
      {/*rest of code...*/}
    </div>
    <div className="group-order-indicator" grouporder="1">
      {/*same code as grouporder="0"*/}
    </div>
    {/*repeat div.group-order-indicator elements for all job entries*/}
  </form>
</Education>
```

### State handlers

```js
const inputChange = (event) => {
  //these 3 values enable the function to figure out which state, entry and input it's being triggered by. See readme for more.
  const stateKey = getStateAttr(event.target);
  const entryOrder = getEntryOrder(event.target);
  const inputKey = event.target.getAttribute("inputkey");

  //deep copy so we can make changes to state object
  const newFormData = copyFormData(formData);

  //update the relevant input in the state
  newFormData[stateKey].answers[entryOrder][inputKey] = event.target.value;

  //this to change
  setFormData(newFormData);
};
```

The `getStateAttr`

I wanted to set up the states such that...

1. Each section had a single correpsonding state that
2. You could apply the save, edit

Each section has a corresponding state. All states and corresponding handler functions are in [App.js](./src/App.js). Any state handler function can work with any of the 3 section states.

In order to achieve all the above, I needed to...

1. Come up with a generalised object that can capture data across all three states in the same structure. The solution is the AnswerObj object (see `src/common/index.jsx`), which holds 3 attributes:

- - `answers` - an array of all the entries for a given section.
- - `saved` - a Boolean that indicates whether section should be saved or made editable
- - `newEntry` - a Boolean showing whether a new entry is being added

2. Figure out a way to distinguish between different states, entry groups (job #1 vs job #2) and inputs. The solution involves rendering the inputs within the following html hierarchy:

- - a `form` element with a `state` attribute indicating the section
- - a `div` with class `group-order-indicator` which has the order of the entry in the `grouporder` attribute. This is needed to distinguish between different entries for the Education and Work Experience section
- - each `input` element has a `inputkey` attribute referencing the key of the input

### Other

Mobile & tablet responsive, with sizes (font, width, etc.) are generally split into...

- one for desktop of a fixed value in rem
- one for tablet/mobile that responds to the width of the screen (vw)

`src/common/common.scss` has variables that are used across all components, including...

- color combination
- screen size triggers for responsive behavior

`src/common/classes.scss` contains classes that are used across all components. These classes can be copied to other projects.
