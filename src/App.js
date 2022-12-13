import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./component/TodoTemplate";
import Header from "./component/Header"
import TodoList from "./component/TodoList";



const GlobalStyle = createGlobalStyle`
  
  `


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TodoTemplate />
    </>
  );
}

export default App;
