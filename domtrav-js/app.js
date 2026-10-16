const ul = document.querySelector('ul');
console.log(ul.parentElement);
ul.parentElement.style.background = "rgba(160, 154, 154, 0.93)";

console.log(ul.children);

// ul.children = addEventListener('click', function() {
//     if (ul.children[0]) {
//         // ul.children[0].style.color = "rgba(253, 211, 120, 0.93)"
//         console.log(ul.children[]);
//     }
//     else if (ul.children[1]) {
//         ul.children[1].style.color = "rgba(154, 241, 96, 0.93)";
//     }
//     else if (ul.children[2]) {
//         ul.children[2].style.color = "rgba(106, 165, 243, 0.93)";
//     }
//     else {
//         alert("Nothing");
//     }
// });


// ul.children[0] = addEventListener('click', function() {
//     ul.children[2].style.color = "rgba(253, 211, 120, 0.93)";
// });

// ul.children[1] = addEventListener('click', function() {
//     ul.children[1].style.color = "rgba(154, 241, 96, 0.93)";
// });

// Array.from to convert HTML objects to js array to be able to loop
// the array
Array.from(ul.children).forEach((item) => {
    item.addEventListener('click', function() {
        this.style.background = "green";
    });
}); 

// Dom triversal Prvious siblings and next siblings of the HTML ul element
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);

// Accessing Descendants

let container = document.querySelector("#container");
let items = container.querySelectorAll("li");
console.log(items);

let firstItem = container.querySelector('li:first-child');
console.log(firstItem)