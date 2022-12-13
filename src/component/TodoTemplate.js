import React from "react";
import TodoInformation from "./TodoInformation";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import styled from "styled-components";
import Footer from "./Footer";

const Template = styled.div`
    margin: 0 auto;
    margin-top: 20px;
    width: 400px;
    height: 600px;
    border: 3px solid black;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`



function TodoTemplate() {
    return (
      <Template>
        <TodoInformation />
        <TodoInput />
        <TodoList />
      </Template>
    );
}

export default TodoTemplate;