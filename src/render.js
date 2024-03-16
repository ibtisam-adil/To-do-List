const todoList = document.querySelector('.todo-list');

const rendertodo = (todoarr) => {
  todoList.innerHTML = todoarr.map((arr, id) => `
        <div class="dynamic-wrapper">
            <div class="check-p-wrap">
                <input class="checkbox" type="checkbox">
                <label for="checkbox${id}" class="p-desc">${arr.taskValue}</label>
            </div>
            <i class='bx bx-dots-vertical-rounded dots'></i>
            <select id="delete-edit-${id}" class="dropdown" name="edit">
                <option value="delete">Delete</option>
                <option value="edit">Edit</option>
            </select>
        </div>
        <div class="underline"></div>
  `).join('');
  const dots = document.querySelectorAll('.dots');
  const dropdown = document.querySelector('.dropdown');
  dots.forEach((d) => {
    d.addEventListener('click', () => {
      dropdown.style.display = 'block';
      d.style.display = 'none';
    });
  });
};

export default rendertodo;