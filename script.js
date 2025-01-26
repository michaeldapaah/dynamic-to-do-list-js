// Wait for the DOM content to load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select the necessary DOM elements
    const addButton = document.getElementById('add-task-btn'); // Button to add task
    const taskInput = document.getElementById('task-input'); // Input field for entering tasks
    const taskList = document.getElementById('task-list'); // Unordered list to display tasks

    // Function to add a new task
    function addTask() {
        // Get the task input and trim any extra spaces
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new li element to represent the task
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn'; // Apply styling class
        removeButton.onclick = function() {
            // Remove the task when the remove button is clicked
            taskList.removeChild(newTask);
        };

        // Append the remove button to the new task
        newTask.appendChild(removeButton);

        // Append the new task to the task list
        taskList.appendChild(newTask);

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Attach event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Allow task to be added by pressing Enter key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
