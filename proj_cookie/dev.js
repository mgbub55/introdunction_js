const counter_screen = document.getElementById("counter");
const cpsDisplay = document.querySelector("#cps");
const cookie_count = document.querySelector("#cookie");
const shop_item1 = document.querySelector("#item-1");
const shop_item2 = document.querySelector("#item-2");
const shop_item3 = document.querySelector("#item-3");

// GLOBAL STATE: The single source of truth for your game values
let cookies = Number(localStorage.getItem('cookieCount'));
let cookiesPerSecond = Number(localStorage.getItem('cookiePerSecond'));

// Update the UI screen text
function updateUI() {
    counter_screen.innerText = Math.floor(cookies);
    cpsDisplay.innerText = `${cookiesPerSecond}/S`;
}

// Manual Cookie Clicking
cookie_count.addEventListener('click', function() {
    cookies++;
    updateUI();
});

// Shop: Grandmother (Item 1)
shop_item1.addEventListener('click', function() {
    if (cookies >= 100) {
        cookies -= 100;
        
        // Instead of a new interval, we just update the global rate
        cookiesPerSecond = 1; 
        updateUI();
    } else {
        alert('Not enough cookies to buy this item!');
    }
});

// Shop: Baker (Item 2)
shop_item2.addEventListener('click', function() {
    if (cookies >= 500) {
        cookies -= 500;
        
        // Overrides the 1/S entirely so it doesn't stack or glitch
        cookiesPerSecond = 10; 
        updateUI();
    } else {
        alert('Not enough cookies to buy this item!');
    }
});

// Shop: Factory (Item 3)
shop_item3.addEventListener('click', function() {
    if (cookies >= 5000) {
        cookies -= 5000;
        
        // Overrides the previous rate to go straight to 100/S
        cookiesPerSecond = 100; 
        updateUI();
    } else {
        alert('Not enough cookies to buy this item!');
    }
});

// THE ONLY INTERVAL: Runs once every second, updating the game smoothly
setInterval(function() {
    cookies += cookiesPerSecond;
    updateUI();
    saveGame()
}, 1000);

// Save Game in Local storage 
function saveGame() {
    localStorage.setItem('cookieCount', cookies)
    localStorage.setItem('cookiePerSecond', cookiesPerSecond)

}