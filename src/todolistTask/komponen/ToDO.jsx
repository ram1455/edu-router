import React from "react";
import styled from "styled-components";

const Tempat = styled.div
`
background-color:salmon;
width:350px;
height:60px;
margin-top:10px;

margin: 0.5rem;
  font-size: 1.5rem;
  color: white;
  display: flex;
  align-items: center;
`

const ToDo = ({text, setTodos, todos, todo})=>{

    const DeleteTodo = ()=>{
        setTodos(todos.filter( element => element.id !== todo.id))
    }
    const CompleteTodo = ()=>{
        setTodos( todos.map(element => {
            if (element.id === todo.id) {
                return {
                    ...element, isCompleted : !element.isCompleted
                }
            }
            return element;
        }))
    }
    return (
        <Tempat class="todo">
            <li class={`todo-item ${todo.isCompleted ? "completed" : ""}`} >{text}</li>
            <button onClick={CompleteTodo} className="complete-btn">done</button>
            <button onClick={DeleteTodo} className="trash-btn">remove</button>
        </Tempat>
    )
}

export default ToDo;