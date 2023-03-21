const newTask = document.querySelector("#new-task");
let form = document.querySelector('form');
const todoItems = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');

function addNewTask(task) {
    const li = document.createElement('li');
    li.className = "item";
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    const label = document.createElement('label');
    label.innerText = task;
    li.appendChild(input);
    li.appendChild(label);

    todoItems.appendChild(li);
    bindInCompleteItems(li, completeTask);
}

let bindInCompleteItems = function (taskItem, checkboxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    console.log(checkBox);
    checkBox.onchange = checkboxClick;
}

let completeTask = function () {
    let listItem = this.parentNode;
    // console.log(this);
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem);
    // bindCompleteItems(listItem, deleteTask);
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    addNewTask(newTask.value)
})