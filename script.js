document.addEventListener('DOMContentLoaded', function() {
    // Select the DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        // Retrieve tasks from Local Storage, parse them into an array
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        // For each task in the array, add it to the DOM
        storedTasks.forEach(taskText => {
            addTask(taskText, false); // 'false' ensures we don't save again when loading
        });
    }

    // Function to add a task
    function addTask(taskText, save = true) {
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

            // Update tasks array in Local Storage after removal
            updateLocalStorage();
        };

        // Append the remove button to the new task li element
        newTask.appendChild(removeButton);

        // Append the new task li element to the task list
        taskList.appendChild(newTask);

        // If 'save' is true, save the task to Local Storage
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Function to update Local Storage after task addition or removal
    function updateLocalStorage() {
        const tasks = [];
        const taskItems = taskList.querySelectorAll('li');
        
        taskItems.forEach(item => {
            tasks.push(item.textContent.replace('Remove', '').trim());
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Add an event listener to the "Add Task" button
    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        addTask(taskText);
    });

    // Add an event listener to the task input to allow tasks to be added on "Enter" key press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            addTask(taskText);
        }
    });

    // Load the tasks from Local Storage when the page is loaded
    loadTasks();
});
