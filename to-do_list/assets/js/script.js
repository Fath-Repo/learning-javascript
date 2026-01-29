// 1. get the data from the localstorage
let taskList = JSON.parse(localStorage.getItem("taskList")) || [];

// 2. Catch form and keep the value inside of variables 
const form = document.getElementById("formInput");
const input = document.getElementById("listInput")
const ul = document.getElementById("task-list")

// 3. make event submit form
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskName = input.value.trim();

    if (taskName === "") {
        document.getElementById("warning").innerHTML = "Task can't be empty"
        return;
    }

    const newTask = {
        name: taskName
    };

    taskList.push(newTask);

    localStorage.setItem("taskList", JSON.stringify(""))

    input.value = "";

    showTaskList();

})

// 4. make function
function showTaskList() {
    ul.innerHTML = "";

    taskList.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.nama;
        ul.appendChild(li);
    });
}

showTaskList();