const taskInput = document.getElementById('taskInput');
const taskTable = document.querySelector('.task-table');
function createTask() { 
    if (taskInput.value !== "") {
        addTaskToTable(taskInput.value);
        taskInput.value = "";
    } else { 
        alert('Please enter a task');
    }
}

function addTaskToTable(inputValue) { 
    const tableRow = document.createElement('tr');
    tableRow.setAttribute('class', 'data-row');
    tableRow.innerHTML = `<td>${inputValue}</td>`;
    console.log(inputValue);
    taskTable.appendChild(tableRow);
}

document.querySelector('.add-btn').addEventListener('click', createTask);