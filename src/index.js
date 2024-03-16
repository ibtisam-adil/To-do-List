// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import addtask from './newTask.js';
import renderTodo from './render.js';

class TodoList {
  constructor() {
    this.todo = [];
  }

  addTask = () => {
    addtask(this.todo, this.rendertodo);
  }

  rendertodo = () => {
    renderTodo(this.todo);
  }
}

const muneebtodo = new TodoList();
muneebtodo.addTask();