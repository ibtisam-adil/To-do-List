const addTask = (array, render, addList) => {
  const taskValue = addList.value;
  const todoObj = { taskValue, isCompleted: false };
  array.push(todoObj);
  render();
};

export default addTask;