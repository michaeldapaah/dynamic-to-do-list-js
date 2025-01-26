document.addEventListener('DOMContentLoaded', function() {
    // Select the DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

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
        newTask.textContent = taskText;  // Set the task text

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';  // Set button text
        removeButton.classList.add('remove-btn'); // Apply styling class

        // Add an onclick event to the remove button to delete the task
        removeButton.onclick = function() {
            taskList.removeChild(newTask);  // Remove the task from the list
        };

        // Append the remove button to the new task li element
        newTask.appendChild(removeButton);

        // Append the new task li element to the task list
        taskList.appendChild(newTask);

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Add an event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add an event listener to the task input to allow tasks to be added on "Enter" key press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
