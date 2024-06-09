const display = document.getElementById('display');
const historyContainer = document.getElementById('history');

function clearDisplay() {
    display.innerText = '0';
}

function appendNumber(number) {
    if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    display.innerText += operator;
}

function deleteLast() {
    if (display.innerText.length === 1) {
        display.innerText = '0';
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
}

function squareNumber() {
    display.innerText = eval(display.innerText) ** 2;
}

function calculateResult() {
    try {
        const result = eval(display.innerText);
        const expression = '📍' + display.innerText + ' = ' + result;
        display.innerText = result;
        addToHistory(expression);
    } catch (error) {
        display.innerText = 'Error';
    }
}

function addToHistory(expression) {
    const historyItem = document.createElement('div');
    historyItem.innerText = expression;
    historyContainer.appendChild(historyItem);
}

function handleKeyPress(event) {
    const key = event.key;
    if (!isNaN(key) || key === '.') {
        appendNumber(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (['+', '-', '*', '/'].includes(key)) {
        appendOperator(key);
    } else if (key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === 's' || key === 'S') {
        squareNumber();
    }
}

document.addEventListener('keydown', handleKeyPress);
