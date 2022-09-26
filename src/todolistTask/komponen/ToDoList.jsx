import React from "react";
import styled from "styled-components";
import ToDo from "./ToDO";

const Wadah = styled.div
`
color: white;
display: flex;

`

const ToDoList = ({todos, setTodos}) => {
    console.log(todos)
    return(
        <Wadah className="todo-container main">
            <ul className="todo-list main">
                {
                    todos.map( (todo) =>(
                        <ToDo   text={todo.text} 
                                key={todo.id} 
                                todo={todo}
                                todos={todos}
                                setTodos={setTodos}/>
                    ))
                }
            </ul>
        </Wadah>

    )
}

export default ToDoList