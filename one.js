const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `<span>${taskText} - ${formatDate(new Date())}</span>`;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', deleteTask);
    
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', editTask);
    
    taskItem.appendChild(editBtn);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}

function deleteTask(event) {
  const taskItem = event.target.parentNode;
  taskList.removeChild(taskItem);
}

function editTask(event) {
  const taskItem = event.target.parentNode;
  const taskTextSpan = taskItem.querySelector('span'); // Select the span containing the task text
  const taskText = taskTextSpan.textContent.split(' - ')[0]; // Get the current task text
  const newTaskText = prompt('Enter new task text:', taskText); // Prompt for new task text
  if (newTaskText) {
    taskTextSpan.innerHTML = `${newTaskText} - ${formatDate(new Date())}`; // Update only the span's content
  }
}

function formatDate(date) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return `${month} ${day}, ${year} ${hour}:${minute}`;
}
