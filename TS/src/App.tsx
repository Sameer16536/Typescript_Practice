
// import { useState } from 'react'
import './App.css'

function App() {
  // const [title,setTitle]=useState([])


  return (
    <>
      <Todo title='workout' description='Karle kuch' isDone={false}/>
    </>
  )
}
//interface
interface TodoType{
  title:string,
  description:string,
  isDone : boolean
}

 const Todo = (props:TodoType)=>{
  return(
    <div>
      <h1>{props.title}</h1>
      <h4>{props.description}</h4>
      <h3>{props.isDone}</h3>
    </div>
  )
 }
export default App
