const addTaskBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${taskText} <button onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(listItem);
    taskInput.value = ''; // Clear the input field
  }
});

// Delete task
function deleteTask(button) {
  const listItem = button.parentElement;
  taskList.removeChild(listItem);
}
