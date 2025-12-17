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
        firstNumber = "";
        operand = "";
        secondNumber = "";
        display.textContent = "Cannot divide by 0";
        return null;
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

body.addEventListener("click", press);
document.addEventListener("keydown", press);

function press(event) {
    event.preventDefault();
    firstNumber = firstNumber === 0 ? "0" : firstNumber;
    secondNumber = secondNumber === 0 ? "0" : secondNumber;
    selection = event.key ? event.key : event.target.textContent;
    if ("0123456789".includes(selection)) {
        display.textContent = appendNumber(selection);
    }
    else if ("+-*/".includes(selection)) {
        if (!firstNumber) {
            return;
        }
        else if (secondNumber) {
            result = operate(operand, Number(firstNumber), Number(secondNumber));
            if (typeof result != 'number') {return};
            result = Math.round((result + Number.EPSILON) * 10000000000) / 10000000000
            display.textContent = result;
            operand = selection;
            secondNumber = "";
            firstNumber = result;
        }
        else {
            operand = selection;
        }
    }
    else {
        if (selection === "=" || selection === "Enter") {
            if (!firstNumber || !secondNumber) {
                return;
            }
            result = operate(operand, Number(firstNumber), Number(secondNumber));
            if (typeof result != 'number') {return};
            result = Math.round((result + Number.EPSILON) * 10000000000) / 10000000000
            display.textContent = result;
            operand = "";
            secondNumber = "";
            firstNumber = "";
        }
        else if (selection === "C" || selection === "c" || selection === "Delete") {
            firstNumber = "";
            operand = "";
            secondNumber = "";
            display.textContent = "-";
        }
        else if (selection === ".") {
            if (display.textContent.includes(".") && !(operand && !secondNumber) && firstNumber) {
                return;
            }
            display.textContent = appendNumber(".");
        }
        else if (selection === "←" || selection === "Backspace") {
            display.textContent = backspace();
        }
    }
};

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

function backspace(num) {
    if (!firstNumber) {
        return "-";
    }
    if (operand) {
        secondNumber= secondNumber.slice(0, -1)
        if (secondNumber) {
            return secondNumber;
        }
        else {
            return "-";
        }
    }
    else {
        firstNumber = firstNumber.slice(0, -1);
        if (firstNumber) {
            return firstNumber;
        }
        else {
            return "-";
        }
    }
};