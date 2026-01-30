// 1. get the local storage if there is a local storage if not then make one
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 2. Catch the dom element html
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("add");
const taskList = document.getElementById("taskList");

// 3. Show the task from existing localstorage

tasks.forEach(task => showTask(task));


//4. function to add task
function addTask() {
    const task = taskInput.value.trim();
    document.getElementById("warning").innerHTML = "";

    if (task === "") {
        document.getElementById("warning").innerHTML = "Task can't be empty"
        return;
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    showTask(task);

    taskInput.value = ""

}

//5. show task on the ul element html 
function showTask(task) {

    const listItem = document.createElement("li");

    listItem.textContent = task;

    taskList.appendChild(listItem);
}

// 6. add even listener for the button
addButton.addEventListener("click", addTask)