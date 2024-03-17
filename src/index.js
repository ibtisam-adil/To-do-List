// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import addtask from './newTask.js';
import renderTodo from './render.js';

const addList = document.querySelector('.add-list');

class TodoList {
  constructor() {
    this.todo = [];
  }

  addTask = () => {
    addtask(this.todo, this.rendertodo, addList);
  }

  editTask = (label, id) => {
    label.contentEditable = true;
    label.focus();
    label.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.todo[id].taskValue = label.innerHTML;
        this.rendertodo();
      }
    });
  }

  updateTaskStatus = (id) => {
    if (this.todo[id].isCompleted) {
      this.todo[id].isCompleted = false;
      this.rendertodo();
    } else {
      this.todo[id].isCompleted = true;
      this.rendertodo();
    }
  }

  deleteTask = (id) => {
    this.todo.splice(id, 1);
    this.rendertodo();
  }

  rendertodo = () => {
    renderTodo(this.todo, this.editTask, this.deleteTask, this.updateTaskStatus);
  }

  bindEvent = () => {
    addList.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.addTask();
      }
    });
  }
}

const muneebtodo = new TodoList();
muneebtodo.bindEvent();