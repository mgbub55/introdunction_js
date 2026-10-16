// Building a todo list app with local storage and checkbox and delete functionality
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

// Load todos from local storage on page load
window.addEventListener('DOMContentLoaded', () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => {
        addTodoToDOM(todo);
    });
});

// Add todo to local storage
function saveTodoToLocalStorage(todo) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Remove todo from local storage
function removeTodoFromLocalStorage(todoText) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter(todo => todo.text !== todoText);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Add todo to DOM
function addTodoToDOM(todo) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
        <input type="checkbox" ${todo.completed ? 'checked' : ''}>
        <span ${todo.completed ? 'style="text-decoration: line-through;"' : ''}>${todo.text}</span>
        <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(li);

    // Add event listener for checkbox  
    const checkbox = li.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => {
        todo.completed = checkbox.checked;
        if (todo.completed) {
            li.querySelector('span').style.textDecoration = 'line-through';
        } else {
            li.querySelector('span').style.textDecoration = 'none';
        }
        updateTodoInLocalStorage(todo);
    });

    // Add event listener for delete button
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(li);
        removeTodoFromLocalStorage(todo.text);
    });
}

// Update todo in local storage
function updateTodoInLocalStorage(updatedTodo) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.map(todo => todo.text === updatedTodo.text ? updatedTodo : todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Add todo on button click
addButton.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const todo = { text: todoText, completed: false };
        addTodoToDOM(todo);
        saveTodoToLocalStorage(todo);
        todoInput.value = '';
    }
});