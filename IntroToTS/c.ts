// Implementing interfaces
// Interfaces have another special property. You can implement interfaces as a class.

interface Person{
    name:string,
    age:number,
    greet(phrase:string):void
}

// create a class which implements this ineteraface
class Employee implements Person{
    name: string;
    age: number;

    constructor(n:string, a:number){
        this.name = n;
        this.age = a
    }
    greet(phrase: string) {
        console.log(`${phrase}${this.name}`)
    }
    }
const e = new Employee("sameer",21)
console.log(e)