interface User {
    fName : string,
    lName : string,
    age   : number
}

const user = {
    fName:"Sameer",
    lName : "Marathe",
    age : 21
}

function  isLegal2 (user:User):boolean{
    if(user.age >= 18){
        return true
    }
    return false
}

