const buttons = document.querySelectorAll('li button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        this.parentElement.remove();
    });
});

// Create and append new elements with the delete beside them
const addItemButton = document.getElementById('add-button');
const newItemInput = document.getElementById('new-item');
const newElementsList = document.getElementById('new-elements');

addItemButton.addEventListener('click', function() {
    const newItemText = newItemInput.value.trim();
    if (newItemText) {
        const newListItem = document.createElement('li');
        newListItem.textContent = newItemText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', function() {
            newListItem.remove();
        });
        newListItem.appendChild(deleteButton);
        newElementsList.appendChild(newListItem);
        newItemInput.value = '';
    }
});
 
