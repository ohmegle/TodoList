import TodoInformation from "./TodoInformation";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Footer from "./Footer";
import styled from "styled-components";
import { useState } from "react";

const Template = styled.div`
    margin: 0 auto;
    margin-top: 100px;
    width: 400px;
    height: 600px;
    border: 3px solid #efe5dc;
    background-color: white;
    display: flex;
    flex-direction: column;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
`

function TodoTemplate() {
  const [change, setChange] = useState(false);
  
  return (
    <Template>
      <TodoInformation />
      <TodoInput change={change} setChange={setChange} />
      <TodoList change={change} setChange={setChange} />
      <Footer />
    </Template>
  );
}

export default TodoTemplate;