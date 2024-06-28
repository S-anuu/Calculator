// Getting the display element and history display
const display = document.getElementById("display");
const historyDisplay = document.getElementById("history");

// Array to store calculation history
let history = [];

// Initialize the display with "0"
display.value = "0";

// Function to append characters to the display
function appendToDisplay(input) {
    if (display.value === "0" && input !== ".") {
        display.value = input;
    } else {
        display.value += input;
    }
}

// Function to clear the display
function clearDisplay() {
    display.value = "0";
}

// Function to delete the last character in the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
    if (display.value === "") {
        display.value = "0";
    }
}

// Function to calculate the result and update the display
function calculateResult() {
    let calculation = display.value;
    try {
        // Evaluating the expression in the display
        display.value = eval(display.value.replace('x', '*'));
        addToHistory(calculation + " = " + display.value);
    } catch (error) {
        // Displaying 'Error' if the expression is invalid
        display.value = "Error";
    }
}

// Function to add a calculation to history
function addToHistory(calculation) {
    history.push(calculation);
    updateHistoryDisplay();
}

// Function to update the history display
function updateHistoryDisplay() {
    historyDisplay.innerHTML = "";
    history.forEach((item) => {
        const p = document.createElement("p");
        p.textContent = item;
        historyDisplay.appendChild(p);
    });
}
