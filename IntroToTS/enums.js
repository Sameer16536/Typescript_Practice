"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    return console.log("Kar kuch");
}
let value = doSomething(Direction.Up);
console.log(value);
//Common useCase::
// import {express} from 'express'
// const app = express()
// enum ResponseStatus{
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }
// app.get("/",(req,res)=>{
//     if(!user.query.userId){
//         res.status(ResponseStatus.Error).json({})
//     }
// })
