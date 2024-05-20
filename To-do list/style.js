document.addEventListener("DOMContentLoaded", function () {
    const todoList = document.getElementById("todo-list");
    const taskInput = document.getElementById("taskInput");
    const categoryInput = document.getElementById("categoryInput");
    const dateTimeInput = document.getElementById("dateTimeInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const deleteAllBtn = document.getElementById("deleteAllBtn"); // Select the Delete All button
  
    let tasks = []; // Array to store tasks
  
    addTaskBtn.addEventListener("click", function () {
      const taskText = taskInput.value.trim();
      const categoryText = categoryInput.value.trim();
      const dateTime = dateTimeInput.value;
  
      if (taskText !== "" && categoryText !== "" && dateTime !== "") {
        const task = {
          taskText: taskText,
          categoryText: categoryText,
          dateTime: dateTime
        };
        tasks.push(task); // Push task to array
  
        // Clear inputs
        taskInput.value = "";
        categoryInput.value = "";
        dateTimeInput.value = "";
  
        renderTasks(); // Render all tasks
      } else {
        alert("Please enter task, category, and scheduled date & time.");
      }
  
      console.log(tasks);
    });
  
    // Event listener for the "Delete All" button
    deleteAllBtn.addEventListener("click", function () {
      tasks = []; // Empty the tasks array
      renderTasks(); // Re-render tasks (which will be empty now)
    });
  
    // Function to render all tasks
    function renderTasks() {
      todoList.innerHTML = ""; // Clear the todo list
  
      // Loop through tasks array and append each task to the todo list
      tasks.forEach(function (task, index) {
        const taskItem = document.createElement("div");
        taskItem.classList.add("mb-2");
        taskItem.innerHTML = `<div class="item">
          
          <div class="d-flex justify-content-between align-items-center">
          <div class="todo-details">
          <span>${task.taskText}</span>
          <small class="ms-2">${task.categoryText}</small>
          <small class="ms-2">${task.dateTime}</small>
          </div>
  
          <div class=allButton>
          <button class="btn btn-success me-2">Done</button>
          <button class="btn btn-danger  me-2 delete-btn" data-index="${index}">Delete</button>
          </div>
          </div>
          
          </div>
          `;
        todoList.appendChild(taskItem);
  
        // Delete task
        const deleteBtn = taskItem.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", function () {
          tasks.splice(index, 1); // Remove task from array
          renderTasks(); // Re-render tasks
        });
  
        // Mark task as done
        const doneBtn = taskItem.querySelector(".btn-success");
        doneBtn.addEventListener("click", function () {
          taskItem.querySelector(".todo-details").classList.toggle("task-done");
        });
      });
    }
  
    // console.log(tasks);
  });