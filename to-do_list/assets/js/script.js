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
    listItem.className = "flex justify-between bg-gray-200 rounded-lg p-2 mt-5"

    //add checkbox
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox";

    //add delete 
    const deleteButton = document.createElement("button");
    deleteButton.className = "bg-red-500 rounded-lg text-white px-4 py-2";
    deleteButton.textContent = "delete"

    //changing text content of li into span
    const name = document.createElement("span");
    name.textContent = task;
    name.className = "flex items-center justify-center text-center"

    //input all the elements into li element
    listItem.appendChild(checkbox);
    listItem.appendChild(name);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    deleteButton.addEventListener("click", function(){
        taskList.removeChild(listItem);
        tasks = tasks.filter(function(t) {
            return t !== task
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            name.classList.add("line-through")
        } else {
            name.classList.remove("line-through")
        };
    });
}

// 6. add even listener for the button
addButton.addEventListener("click", addTask)