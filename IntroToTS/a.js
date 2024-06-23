"use strict";
const x = 29;
console.log(x);
const y = "Sameer";
console.log(y);
const z = {
    user: "Sameer",
    age: 20
};
//Function:
function hello() {
    return "Hello World";
}
console.log(hello());
//Greet Func
function greet(name) {
    return ("Hello" + name);
}
console.log(greet("Sameer"));
//add function:
function add(a, b) {
    const result = a + b;
    return result;
}
console.log(add(10, 20));
//return True or False if user is 18+
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log("isLegal?:" + isLegal(20));
function mainFunc(callBackFunc) {
    setInterval(callBackFunc, 1000);
}
function callBackFunc() {
    return "Madarchod Manus";
}
