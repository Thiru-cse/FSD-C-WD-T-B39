// Sample Data
let tasks = [
    {id:1, title:"Watch Recordings"},
    { id: 2, title: "Complete Session" },
]

// Function to render the task in the list
function renderTasks() {
    const tasklist = document.getElementById("taskList");
    tasklist.innerHTML = "";

    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${task.title}</span>
        <button onclick="editTask(${task.id})">Edit</button>
        <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        tasklist.append(li);
    })
}

// Function to add a new task
function addTask() {
    const input = document.getElementById("taskInput");
    const title = input.value.trim();
    if (title === "") return;

    const newTask = {
        id: tasks.length + 1,
        title: title,
    };

    tasks.push(newTask);
    input.value = "";
    renderTasks();
}

// Edit Task
function editTask(id) {
    const newTitle = prompt("Enter the new task title");
    if (newTitle !== null) {
        const task = tasks.find((task) => task.id === id);
        console.log(task);
        if (task) {
            task.title = newTitle;
            renderTasks();
        }
    }
}

// Delete Task
function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    renderTasks();
}


// Initial Rendering
renderTasks();
