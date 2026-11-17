
let firstNumber = "";
let operator = "";

function appendValue(value) {

    let display = document.getElementById("display");

    // Check whether the user selected an operator
    if (value === "+" || value === "-" ||
        value === "*" || value === "/") {

        if (display.value === "" || operator !== "") {
            return;
        }

        firstNumber = display.value;
        operator = value;
        display.value = "";

        return;
    }

    // Allow only one decimal point
    if (value === ".") {

        if (display.value.includes(".")) {
            return;
        }

        if (display.value === "") {
            display.value = "0";
        }
    }

    display.value += value;
}


// Clear calculator
function clearDisplay() {

    document.getElementById("display").value = "";

    firstNumber = "";
    operator = "";
}


// Delete last digit
function deleteNumber() {

    let display = document.getElementById("display");

    display.value = display.value.slice(0, -1);
}


// Calculate result
function calculateResult() {

    let display = document.getElementById("display");

    if (firstNumber === "" ||
        operator === "" ||
        display.value === "") {
        return;
    }

    let secondNumber = Number(display.value);
    let num1 = Number(firstNumber);
    let result;

    switch (operator) {

        case "+":
            result = num1 + secondNumber;
            break;

        case "-":
            result = num1 - secondNumber;
            break;

        case "*":
            result = num1 * secondNumber;
            break;

        case "/":

            if (secondNumber === 0) {
                display.value = "Cannot divide by zero";

                firstNumber = "";
                operator = "";

                return;
            }

            result = num1 / secondNumber;
            break;
    }

    display.value = result;

    firstNumber = "";
    operator = "";
}
