function maxArray(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxArray([1, 2, 3, 4, 78]));
function filteredUsers(users) {
    return users.filter(function (x) { return x.age > 18; });
}
console.log(filteredUsers([{
        name: "John",
        age: 20
    }, {
        name: "Jane",
        age: 17
    },
    {
        name: "Bob",
        age: 30
    },]));
