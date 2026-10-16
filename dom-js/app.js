
const myHeading = document.getElementById("myHeading");
const myButton = document.getElementById("myButton");
myButton.style.color = 'green';

const shoppingList = document.querySelectorAll('ul > li')
console.log(shoppingList);

// attributes
const myImage = document.getElementById("myImage");
console.log(myImage.getAttribute('src'));
console.log(myImage.getAttribute('alt'));
myImage.setAttribute('height', '500');
myImage.setAttribute('width', '350');
// myImage.setAttribute('src', '/lady.png');

// if (myImage.getAttribute('src') === '/lady.png') {
//     myImage.onclick = function() {
//         myImage.src = '/portal.png';
//     }
// }
// else {
//     myImage.onclick = function() {
//         myImage.src = '/lady.png';
//     }
// }

myImage.onclick = function() {
    if (myImage.getAttribute('src').includes('/lady.png')) {
        myImage.src = '/portal.png';
    }else {
    myImage.src = '/lady.png';
    }
}


const myBox = document.querySelector('div');
myBox.onmouseenter = function() {
    myBox.style.background = 'grey';
}
myBox.onmouseleave = function() {
    myBox.style.background = 'white';
}

const myImage2 = document.querySelector('#myImage2');
// myImage2.onmouseenter = function() {
//     myImage2.src = '/portal.png';
// }
// myImage2.onmouseleave = function() {
//     myImage2.src = '/lady.png';
// }

myImage2.addEventListener('mouseenter', () => {
    myImage2.src = '/portal.png';
    myImage2.style.height = '300px';
    myImage2.style.width = '250px';
});

myImage2.addEventListener('mouseleave', () => {
    myImage2.src = '/lady.png';
    myImage2.style.height = '300px';
    myImage2.style.width = '250px';
});