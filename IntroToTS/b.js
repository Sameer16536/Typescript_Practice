var user = {
    fName: "Sameer",
    lName: "Marathe",
    age: 21
};
function isLegal(user) {
    if (user.age >= 18) {
        return true;
    }
    return false;
}
console.log(isLegal());
