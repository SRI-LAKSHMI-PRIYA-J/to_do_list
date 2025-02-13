// script.js

// Get elements from the DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        // Create a new list item (task)
        const li = document.createElement('li');
        li.innerHTML = `
            <label class="task-label">
                <input type="checkbox" class="task-checkbox">
                <span class="task-text">${taskText}</span>
            </label>
            <button class="delete-btn">X</button>
        `;

        // Toggle task completion (checked/unchecked)
        const checkbox = li.querySelector('.task-checkbox');
        checkbox.addEventListener('change', () => {
            const taskText = li.querySelector('.task-text');
            taskText.classList.toggle('completed');
        });

        // Delete task when "X" is clicked
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        // Append the task to the list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }
}

// Add task when the "Add Task" button is clicked
addTaskBtn.addEventListener('click', addTask);

// Add task when pressing Enter key
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
