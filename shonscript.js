let tasks = [];


function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = "";
        displayTasks();
    }
}


function displayTasks() {
    const tasksContainer = document.getElementById("tasks");
    tasksContainer.innerHTML = "";

    tasks.forEach((task, index) => {
        const taskElement = document.createElement("div");
        taskElement.className = "task";
        if (task.completed) {
            taskElement.classList.add("completed");
        }

        const textElement = document.createElement("span");
        textElement.textContent = task.text;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteTask(index);

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = () => editTask(index);

        taskElement.appendChild(textElement);
        taskElement.appendChild(deleteButton);
        taskElement.appendChild(editButton);
        tasksContainer.appendChild(taskElement);
    });
}


function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}


function editTask(index) {
    const newText = prompt("Edit task:", tasks[index].text);
    if (newText !== null) {
        tasks[index].text = newText;
        displayTasks();
    }
}


function markAllAsComplete() {
    tasks.forEach((task) => (task.completed = true));
    displayTasks();
}


function deleteAllTasks() {
    tasks = [];
    displayTasks();
}

displayTasks();
