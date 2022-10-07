// This test is only looking for the function to exist, so we can leave the code block empty for now:

function add() {

}

// This test is only looking for the function to exist, so we can leave the code block empty for now:

function subtract() {

}

// This test is only looking for the function to exist, so we can leave the code block empty for now:

function multiply() {

}

// This test is only looking for the function to exist, so we can leave the code block empty for now:

function divide() {

}

// The add(a, b) tells us the test is trying to pass two arguments to our function.
// add(a, b) means that two parameters are being passed as arguments when the function is called. 
// The tests are choosing the a and b values. 

function add(a, b) {
    return a+b;
}

// Repeat the above, but for subtraction. 

function subtract(a, b) {
    return a-b;
}

// Repeat the above, but for multiplication. 

function multiply(a, b) {
    return a * b;
} 

// Repeat the above, but for division.

function divide(a, b) {
    return a / b;
}

// Increment(n) increments n and returns the result. 

function increment(n) {
    return n +=1;
}

// Decrement(n) decrements n and returns the result

function decrement(n) {
    return n -+1;
}

// Parses n as an integer and returns the parsed integer.
// JavaScript gives us tools to turn these strings into proper numbers.

function makeInt(n) {
    return parseInt(n, 10);
}

// Preserves n's decimals (it parses n as a floating point number) and returns the parsed number.

function preserveDecimal(n) {
    return parseFloat(n, 10);
}