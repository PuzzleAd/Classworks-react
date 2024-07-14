import React from "react"
import "./Todos.css"

const Todos = (props) => {
    return (
        <>
           <h1>Tasks To Do</h1>
           {props.todos.map((todo, index)=> (
            <div key={index} className={todo.completed ? "true" : "false"}>{todo.text}</div>
           ))} 
        </>
    )
}

export default Todos