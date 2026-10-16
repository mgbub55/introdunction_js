const counter_screen = document.getElementById("counter");
const cpsDisplay = document.querySelector("#cps");
const cookie_count = document.querySelector("#cookie");
const shop_item1 = document.querySelector("#item-1");
const shop_item2 = document.querySelector("#item-2");
const shop_item3 = document.querySelector("#item-3");

const count = 0;
const countPerSecond = 0;
counter_screen.innerText = count;

cookie_count.addEventListener('click', function() {
    // alert('Hello');
    let count = parseInt(counter_screen.innerText);
    count++;
    counter_screen.innerText = count;
})


// shop Grandmother
shop_item1.addEventListener('click', function() {
    if (parseInt(counter_screen.innerText) >= 100) {
        let count = parseInt(counter_screen.innerText);
        count = count - 100;
        counter_screen.innerText = count;
    setInterval(function() {
        let count = parseInt(counter_screen.innerText);
        count++;
        counter_screen.innerText = count;
        let countPerSecond = parseInt(cpsDisplay.innerText);
        countPerSecond = 1;
        cpsDisplay.innerText = `${countPerSecond}/S`;
    }
    , 1000);
    }
    else {
        alert('Not enough cookies to buy this item!');
    }
    
});

// Shope Baker
shop_item2.addEventListener('click', function() {
    if (parseInt(counter_screen.innerText) >= 500) {
        let count = parseInt(counter_screen.innerText);
        count = count - 500;
        counter_screen.innerText = count;

    setInterval(function() {
        let count = parseInt(counter_screen.innerText);
        count = count + 10;
        counter_screen.innerText = count;
        let countPerSecond = parseInt(cpsDisplay.innerText);
        countPerSecond = 10;
        cpsDisplay.innerText = `${countPerSecond}/S`;
    }
    , 1000);
    }else {
        alert('Not enough cookies to buy this item!');
    }
});

// Shop Factory
shop_item3.addEventListener('click', function() {
    if (parseInt(counter_screen.innerText) >= 5000) {
        let count = parseInt(counter_screen.innerText);
        count = count - 5000;
        counter_screen.innerText = count;

    setInterval(function() {
        let count = parseInt(counter_screen.innerText);
        count = count + 100;
        counter_screen.innerText = count;
        let countPerSecond = parseInt(cpsDisplay.innerText);
        countPerSecond = 100;
        cpsDisplay.innerText = `${countPerSecond}/S`;
    }
    , 1000);
    }else {
        alert('Not enough cookies to buy this item!');
    }
});

