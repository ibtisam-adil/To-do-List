const addList = document.querySelector('.add-list');

const addTask = (array, render) => {
  addList.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const taskValue = addList.value;
      const todoObj = { taskValue, isCompleted: false };
      array.push(todoObj);
      render();
    }
  });
};

export default addTask;