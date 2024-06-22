const x : number = 29;
console.log(x);

const y : string = "Sameer"
console.log(y)

const z :object ={
    user:"Sameer",
    age : 20
}

//Function:
function hello():string{
    return "Hello World";
}

console.log(hello())

//Greet Func
function greet(name: string):string{
    return ("Hello"+name)
}
console.log(greet("Sameer"))


//add function:
function add( a:number,b:number):number{
    const result : number  = a + b;
    return result
}
console.log(add(10,20))

//return True or False if user is 18+
 function isLegal(age:number):boolean{
    if(age>= 18){
        return true
    }
    else{
        return false
    }
 }

 console.log("isLegal?:"+isLegal(20))

 function mainFunc (callBackFunc:()=>void){
    setInterval(callBackFunc,1000)
 }

 function callBackFunc ():string{
    return "Madarchod Manus"
 }