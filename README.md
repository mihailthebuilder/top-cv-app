# CV Application

<br>

## Overview

A React-based online job application form. Following along The Odin Project's course: https://www.theodinproject.com/lessons/cv-application
<br>

## How it works

The form has 3 sections:

- General Info - your name, email and phone number
- Education - school, course, start date, end date
- Work Experience - company, job title, main responsibilities, start date, end date

<br>

You can save and edit the General Info, Education and Work Experience sections. You can add new entries and delete existing ones in the Education and Work Experience sections.

<br>

## Programming features

State flow:

- Each section has a corresponding state
- All states and corresponding handler functions are in `App.js`
- Any state handler function can work with any of the 3 section states

<br>

Other:

- Mobile & tablet responsive
- `src/common/common.scss` has variables that are used across all components, including...
  - color combination
  - screen size triggers for responsive behavior
- `src/common/classes.scss` contains classes that are used across all components. These classes can be copied to other projects.
