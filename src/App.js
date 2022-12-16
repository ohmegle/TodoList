import styled, { createGlobalStyle } from "styled-components";
import TodoTemplate from "./component/TodoTemplate";
import Header from "./component/Header";
import Nav from "./component/Nav";
import { useState } from "react";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
    
  `
const Wrapper = styled.div`
    display: flex;
`

function App() {

const [openNav, setopenNav] = useState(false);

const navHandler = () => {
  setopenNav(!openNav);
} 

  return (
    <>
        <GlobalStyle />
        <Wrapper>
          <Header navHandler={navHandler}/>
          { openNav ? <Nav navHandler={navHandler} /> : ""}
          <TodoTemplate />
        </Wrapper>
    </>
  );
}

export default App;
