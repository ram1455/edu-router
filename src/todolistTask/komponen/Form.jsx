import React, { useState } from "react";
import styled from "styled-components";

const Kontaina = styled.div
`
min-height: 20vh;
display: flex;
justify-content: center;

padding: 0.5rem;
  font-size: 2rem;
  border: none;
  background: rgb(255, 255, 255);

  min-width: 30%;
  list-style: none;
  color:white;
`

const Form = ({inputText, setInputText, todos, setTodos})=>{
    const [place, setPlace ]= useState('ketik disini')
    const handleInput = (e)=>{
        setInputText(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (inputText.length > 0) {
            setTodos([
                ...todos, {text : inputText, id : Math.random() * 1000,isCompleted:false}])
            setInputText('');
            setPlace('ketik disini');
        } else {
            setPlace('inputan tidak bisa kosong')
        }
    }

    return(
        <Kontaina>
        <form>
            <input placeholder={place} value={inputText} type="text" className="todo-input" onChange={handleInput} />
            <button className="todo-button" type="submit" onClick={handleSubmit}>ADD
            </button>
        </form>
        </Kontaina>
    )
}

export default Form