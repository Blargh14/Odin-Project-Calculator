function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by 0";
    };
    return a / b;
};

function operate(o, a, b) {
    switch (o) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
    }
};

let firstNumber = "";
let operand;
let secondNumber = "";

body = document.querySelector("body");
display = document.querySelector("#display");

body.addEventListener("click", event => {
    selection = event.target.textContent;
    if ("0123456789".includes(selection)) {
        display.textContent = appendNumber(selection);
    }
    else if ("+-*/".includes(selection)) {
        
    }
});

function appendNumber(num) {
    if (operand) {
        secondNumber += num;
        return secondNumber;
    }
    else {
        firstNumber += num;
        return firstNumber;
    }
};