"use strict";
// Implementing interfaces
// Interfaces have another special property. You can implement interfaces as a class.
// create a class which implements this ineteraface
class Employee {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase}${this.name}`);
    }
}
const e = new Employee("sameer", 21);
console.log(e);
