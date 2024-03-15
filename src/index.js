import _ from 'lodash';
import './style.css';

const todoList = document.querySelector(".todo-list");

let todo = [
  {
    description: "Demo Task-1",
    iscompleted: false,
    index: 0,
  },
  {
    description: "Demo Task-2",
    iscompleted: false,
    index: 1,
  },
  {
    description: "Demo Task-3",
    iscompleted: false,
    index: 2,
  },
  {
    description: "Demo Task-4",
    iscompleted: false,
    index: 3,
  },
  {
    description: "Demo Task-5",
    iscompleted: false,
    index: 4,
  },
  {
    description: "Demo Task-6",
    iscompleted: false,
    index: 5,
  },
  {
    description: "Demo Task-7",
    iscompleted: false,
    index: 6,
  },
  {
    description: "Demo Task-8",
    iscompleted: false,
    index: 7,
  },

];

todoList.innerHTML = todo.map((arr) => {
    return `
        <div class="dynamic-wrapper">
        <div class="check-p-wrap">
            <input class="checkbox" type="checkbox">
            <label for="checkbox${arr.index}" class="p-desc">${arr.description}</label>
        </div>
        <i class='bx bx-dots-vertical-rounded'></i>
        </div>
        <div class="underline"></div>
        `
}).join("");

// function component() {
//   const element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

// document.body.appendChild(component());