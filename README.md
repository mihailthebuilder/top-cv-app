# CV Application

## Overview

A React-based online job application form. This is an assignment from The Odin Project: https://www.theodinproject.com/lessons/cv-application

## How it works

The form has 3 sections:

- General Info - your name, email and phone number
- Education - school, course, start date, end date
- Work Experience - company, job title, main responsibilities, start date, end date

You can save and edit the General Info, Education and Work Experience sections. You can add new entries and delete existing ones in the Education and Work Experience sections.

## Programming features

### State flow

Each section has a corresponding state. All states and corresponding handler functions are in `App.js`. Any state handler function can work with any of the 3 section states.

In order to achieve all the above, I needed to...

1. Come up with a generalised object that can capture data across all three states in the same structure. The solution is the AnswerObj object (see `src/common/outsourced.js`), which holds 3 attributes:

- `answers` - an array of all the entries for a given section.
- `saved` - a Boolean that indicates whether section should be saved or made editable
- `newEntry` - a Boolean showing whether a new entry is being added

2. Figure out a way to distinguish between different states, entry groups (job #1 vs job #2) and inputs. The solution involves rendering the inputs within the following html hierarchy:

- a `form` element with a `state` attribute indicating the section
- a `div` with class `group-order-indicator` which has the order of the entry in the `grouporder` attribute. This is needed to distinguish between different entries for the Education and Work Experience section
- each `input` element has a `inputkey` attribute referencing the key of the input

### Other

Mobile & tablet responsive, with sizes (font, width, etc.) are generally split into two, one for desktop, another for tablet/mobile.

`src/common/common.scss` has variables that are used across all components, including...

- color combination
- screen size triggers for responsive behavior

`src/common/classes.scss` contains classes that are used across all components. These classes can be copied to other projects.
