// Implementing interfaces
// Interfaces have another special property. You can implement interfaces as a class.
// create a class which implements this ineteraface
var Employee = /** @class */ (function () {
    function Employee(n, a) {
        this.name = n;
        this.age = a;
    }
    Employee.prototype.greet = function (phrase) {
        console.log("".concat(phrase).concat(this.name));
    };
    return Employee;
}());
var e = new Employee("sameer", 21);
console.log(e);
