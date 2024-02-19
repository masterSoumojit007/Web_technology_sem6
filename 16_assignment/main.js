let displayValue = '';

function addToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function operate(operator) {
    if (displayValue !== '') {
        displayValue += operator;
        document.getElementById('display').value = displayValue;
    }
}

function calculate() {
    if (displayValue !== '') {
        try {
            const result = eval(displayValue);
            document.getElementById('display').value = result;
            displayValue = result.toString();
        } catch (error) {
            document.getElementById('display').value = 'Error';
            displayValue = '';
        }
    }
}
