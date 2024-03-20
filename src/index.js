import './style.css';
import addtask from './newTask.js';
import renderTodo from './render.js';

const addList = document.querySelector('.add-list');
const clearTask = document.querySelector('.clear-tasks');

class TodoList {
  constructor() {
    this.todo = this.getTodoListFromLocal() || [];
    this.rendertodo();
  }

  getTodoListFromLocal = () => JSON.parse(localStorage.getItem('localtodo'));

  clearAllTasks = () => {
    this.todo = this.todo.filter((a) => a.isCompleted !== true);
    this.rendertodo();
  };

  addTask = () => {
    addtask(this.todo, this.rendertodo, addList);
  };

  editTask = (label, id) => {
    label.contentEditable = true;
    label.focus();
    label.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.todo[id].taskValue = label.innerHTML;
        this.updateLocalStorage();
        this.rendertodo();
      }
    });
  };

  updateTaskStatus = (id) => {
    if (this.todo[id].isCompleted) {
      this.todo[id].isCompleted = false;
      this.rendertodo();
    } else {
      this.todo[id].isCompleted = true;
      this.rendertodo();
    }
  };

  deleteTask = (id) => {
    this.todo.splice(id, 1);
    this.updateLocalStorage();
    this.rendertodo();
  };

  updateLocalStorage = () => {
    localStorage.setItem('localtodo', JSON.stringify(this.todo));
  }

  rendertodo = () => {
    renderTodo(
      this.todo,
      this.editTask,
      this.deleteTask,
      this.updateTaskStatus,
    );
  };

  bindEvent = () => {
    clearTask.addEventListener('click', this.clearAllTasks);
    addList.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.addTask();
      }
    });
  };
}

const muneebtodo = new TodoList();
muneebtodo.bindEvent();
