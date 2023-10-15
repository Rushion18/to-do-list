
document.getElementById("addTask").addEventListener("click", function () {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const tasksList = document.getElementById("tasks");
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            ${taskText}
            <button class="delete">Delete</button>
        `;
        tasksList.appendChild(taskItem);

        taskInput.value = ""; 

    
        taskItem.querySelector(".delete").addEventListener("click", function () {
            taskItem.remove();
        });
    }
});