enum Direction{
    Up,Down,Left,Right
}

function doSomething(keyPressed:Direction){
    return console.log("Kar kuch")
}

let value = doSomething(Direction.Up)
console.log(value)


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
