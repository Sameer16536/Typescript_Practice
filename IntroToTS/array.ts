function maxArray(arr:number[]):number{
    let max = 0;
    for(let i = 0 ; i< arr.length ;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

console.log(maxArray([1,2,3,4,78]))


interface User{
    name:string;
    age:number;

}

function filteredUsers(users:User[]){
    return users.filter(x=>x.age > 18)
}

console.log(filteredUsers([{
    name:"John",
    age:20
},{
    name:"Jane",
    age:17
},
{
    name:"Bob",
    age:30
},]))