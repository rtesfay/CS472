// get task form, input and list
const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');
const clearTasksBtn = document.querySelector('#clear-tasks-btn');

// add task event
taskForm.addEventListener('submit', addTask);

// clear tasks event
clearTasksBtn.addEventListener('click', clearTasks);

// load tasks from localStorage
document.addEventListener('DOMContentLoaded', loadTasks);

function addTask(e) {
  e.preventDefault();
}// get task value
  const taskValue = taskInput.value.trim();
  if(taskValue !== '') {
    // create task item
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
      <span>${taskValue}</span>
      <button class="delete-task-btn">Delete</button>
    `};
    // add task to

