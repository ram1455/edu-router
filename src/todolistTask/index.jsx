import { useState } from "react";
import styled from "styled-components";
import "../App.css"
import Form from "./komponen/Form";
import ToDoList from "./komponen/ToDoList";

const Wadah = styled.div
`
background-image: linear-gradient(120deg, #4360d5 0%, #2f5ae9 100%);
  color: white;
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
`
const Judul = styled.h1
`
  width:fit-content;
  margin: 0px auto;
  font-size:20px;
`

function Todolilist() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <Wadah className="main"> 
    <header>
      <Judul>To Do List</Judul>
      <p>maap yah kak yg ini chaos karena sebelumnya pake plaincss, dan klo saya implementasiin kesini yg lain jadi kena.</p>
      <p>tapi yg penting tujuan tugas router ini tercapai :D</p>
    </header>
      <Form setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos}/>
      <ToDoList todos={todos} setTodos={setTodos}/>
    </Wadah>
  );
}

export default Todolilist;
