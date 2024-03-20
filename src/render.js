const todoList = document.querySelector('.todo-list');
const rendertodo = (todoarr, editTask, deleteTask, updateTaskStatus) => {
  todoList.innerHTML = todoarr.map((arr, id) => `
          <div class="dynamic-wrapper">
              <div class="check-p-wrap">
                  <input class="checkbox" type="checkbox">
                  <label id="task-${id}" class="p-desc ${arr.isCompleted ? 'completed' : ''}">${arr.taskValue}</label>
              </div>
              <i class='bx bx-dots-vertical-rounded dots'></i>
              <select id="delete-edit-${id}" class="dropdown" name="edit" style="display:none;">
                  <option value="select">Select</option>
                  <option value="delete">Delete</option>
                  <option value="edit">Edit</option>
              </select>
          </div>
          <div class="underline"></div>
    `).join('');

  const dots = document.querySelectorAll('.dots');

  dots.forEach((d, id) => {
    const dropdown = document.querySelector(`#delete-edit-${id}`);
    const label = document.querySelector(`#task-${id}`);
    const checkbox = document.querySelectorAll('.checkbox');

    checkbox.forEach((checks, id) => {
      checks.addEventListener('change', () => {
        updateTaskStatus(id);
      });
    });

    d.addEventListener('click', () => {
      dropdown.style.display = 'block';
      d.style.display = 'none';
    });

    dropdown.addEventListener('change', (event) => {
      const selectedOption = event.target.value;
      if (selectedOption === 'edit') {
        editTask(label, id);
      } else if (selectedOption === 'delete') {
        deleteTask(id);
      }
      dropdown.style.display = 'none';
    });

    label.addEventListener('blur', () => {
      label.contentEditable = false;
      todoarr[id].taskValue = label.textContent;
    });
  });
};

export default rendertodo;
