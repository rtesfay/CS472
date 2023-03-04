const tasksList = document.getElementById('tasks');
const addTaskBtn = document.getElementById('add-task-btn');
const clearTasksBtn = document.getElementById('clear-tasks-btn');
const newTaskInput = document.getElementById('new-task');

// Load tasks from local storage on page load
window.onload = function() {
  if (localStorage.getItem('tasks')) {
    tasksList.innerHTML = localStorage.getItem('tasks');
  }
};

// Save tasks to local storage
function saveTasks() {
  localStorage.setItem('tasks', tasksList.innerHTML);
}

// Add a new task to the list
function addTask() {
  const taskDescription = newTaskInput.value.trim();
  if (taskDescription !== '') {
    const newTaskItem = document.createElement('li');
    newTaskItem.classList.add('task-item');
    newTaskItem.innerHTML = taskDescription + '<button class="delete-task-btn">x</button>';
    tasksList.appendChild(newTaskItem);
    newTaskInput.value = '';
    saveTasks();
  }
}

// Remove a task from the list
function deleteTask(event) {
  if (event.target.classList.contains('delete-task-btn')) {
    event.target.parentNode.remove();
    saveTasks();
  }
}

// Clear all tasks from the list
function clearTasks()
