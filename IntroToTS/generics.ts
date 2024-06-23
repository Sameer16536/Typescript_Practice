// Let’s say you have a function that needs to return the first element of an array.
//  Array can be of type either string or integer.

// const firstEl (arr:(string|number)[]){
//     if(arr.length === 0){
//         throw new Error("Array is empty");
//         }
//         return arr[0];
// }

function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement(["Madara", "Morax"]);
console.log(el.toLowerCase())

let sum = (x: number, y: number): number => {
    return x + y;
}

sum(10, 20); //returns 30