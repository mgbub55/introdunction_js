const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function(e) {
    e.preventDefault();
    button.innerText = input.value;
    // alert(input.value);
    // console.log(input.value);
});




// Input Events

const inputEvent = document.getElementById('inputEvent');
const outputEvent = document.getElementById('outputEvent');

inputEvent.addEventListener('input', function() {
    outputEvent.innerText = inputEvent.value;
});

// Submit Event

const form = document.getElementById('form');
const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');
const outputSubmit = document.getElementById('outputSubmit');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let submitData = `Name: ${inputName.value}, Email: ${inputEmail.value}`;
    alert(submitData);
});