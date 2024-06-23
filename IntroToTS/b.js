"use strict";
const user = {
    fName: "Sameer",
    lName: "Marathe",
    age: 21
};
function isLegal2(user) {
    if (user.age >= 18) {
        return true;
    }
    return false;
}
