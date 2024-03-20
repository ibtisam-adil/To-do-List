const addTask = (array, render, addList) => {
  const taskValue = addList.value;
  addList.value = '';
  const todoObj = { taskValue, isCompleted: false };
  array.push(todoObj);
  localStorage.setItem('localtodo', JSON.stringify(array));

  render();
};

export default addTask;