const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearAllBtn = document.getElementById('clearAllBtn');

window.addEventListener('load', loadTask);

addTaskBtn.addEventListener('click', addTask);

clearAllBtn.addEventListener('click', () => {
    localStorage.clear();
    loadTask();
})

function saveTasks() {
    let tasks = [];
    for (let i = 0; i < document.querySelectorAll('li').length; i++) {
        tasks.push(document.querySelectorAll('li')[i].textContent)
    }
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function addTask(task) {
    let li = document.createElement('li');
    let btn = document.createElement('button');
    if (task) {
        li.textContent = task;
    } else {
        li.textContent = taskInput.value;
    }
    btn.textContent = 'Remove';
    li.appendChild(btn);
    taskList.appendChild(li);
    btn.addEventListener('click', remove); // Add event listener to "Remove" button
    saveTasks();
}


function clearAll(event) {
    if (event.target.textContent === 'Clear All Tasks') {
        while (taskList.firstChild) { // This loop clears only the list items
            taskList.removeChild(taskList.firstChild);
        }
        localStorage.clear();
        saveTasks();
    }
}

function remove(event) {
    if (event.target.textContent === 'Remove') {
        const li = event.target.parentNode;
        if (li && li.parentNode === taskList) {
            taskList.removeChild(li);
            saveTasks();
        }
    }
}

function loadTask() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if(tasks == null) return;
    for (let i = 0; i < tasks.length; i++) {
        addTask(tasks[i]);
    }
}