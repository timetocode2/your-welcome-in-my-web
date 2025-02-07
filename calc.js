let calcScrn2 = document.getElementById('calc-scrn2');
let calcKeypadBtn1 = document.getElementById('calc-keypad-btn1');
let calcKeypadBtn2 = document.getElementById('calc-keypad-btn2');
let calcKeypadBtn3 = document.getElementById('calc-keypad-btn3');
let calcKeypadBtn4 = document.getElementById('calc-keypad-btn4');
let calcKeypadBtn5 = document.getElementById('calc-keypad-btn5');
let calcKeypadBtn6 = document.getElementById('calc-keypad-btn6');
let calcKeypadBtn7 = document.getElementById('calc-keypad-btn7');
let calcKeypadBtn8 = document.getElementById('calc-keypad-btn8');
let calcKeypadBtn9 = document.getElementById('calc-keypad-btn9');
let calcKeypadBtn10 = document.getElementById('calc-keypad-btn10');
let calcKeypadBtn11 = document.getElementById('calc-keypad-btn11');
let calcKeypadBtn12 = document.getElementById('calc-keypad-btn12');
let calcKeypadBtn13 = document.getElementById('calc-keypad-btn13');
let calcKeypadBtn14 = document.getElementById('calc-keypad-btn14');
let calcKeypadBtn15 = document.getElementById('calc-keypad-btn15');
let calcKeypadBtn16 = document.getElementById('calc-keypad-btn16');
let calcKeypadBtn17 = document.getElementById('calc-keypad-btn17');


for (let i = 1; i < 10; i++) {
    let close11 = document.querySelectorAll("#calc-keypad-btn" + i);
    close11.forEach(close1 => {
        close1.addEventListener('click', function () {
            calcScrn2.innerHTML += i;
        });

    });
};

function m(n) { calcScrn2.innerHTML += n; };

calcKeypadBtn10.addEventListener("click", () => {
    m(0);
});
calcKeypadBtn11.addEventListener("click", () => {
    m('-');
});
calcKeypadBtn12.addEventListener("click", () => {
    m('+');
});
calcKeypadBtn13.addEventListener("click", () => {
    m('*');
});
calcKeypadBtn14.addEventListener("click", () => {
    m('/');
});
calcKeypadBtn15.addEventListener("click", () => {
    try {
        calcScrn2.innerHTML += '=' + Function('"use strict";return (' + calcScrn2.innerHTML + ')')();
    } catch (e) {
        calcScrn2.innerHTML = 'Error';
    }
});
calcKeypadBtn16.addEventListener("click", () => {
    calcScrn2.innerHTML = "";
});

