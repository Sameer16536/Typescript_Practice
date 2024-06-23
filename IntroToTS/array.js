"use strict";
// Fix the maxArray function to handle arrays with negative numbers
function maxArray(arr) {
    let max = arr[0]; // Initialize max to the first element of the array
    for (let i = 1; i < arr.length; i++) { // Start loop from second element
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxArray([1, 2, 3, 4, 78])); // Output: 78
// Fix filteredUsers function to match the corrected User interface
function filteredUsers(users) {
    return users.filter(user => user.age > 18);
}
console.log(filteredUsers([
    { fName: "John", lName: "Doe", age: 20 },
    { fName: "Jane", lName: "Doe", age: 17 },
    { fName: "Bob", lName: "Smith", age: 30 }
])); // Output: [ { fName: 'John', lName: 'Doe', age: 20 }, { fName: 'Bob', lName: 'Smith', age: 30 } ]
