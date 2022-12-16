import styled, { createGlobalStyle } from "styled-components";
import TodoTemplate from "./component/TodoTemplate";
import Header from "./component/Header";
import Nav from "./component/Nav";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
    
  `
const Wrapper = styled.div`
    display: flex;
`

function App() {

const [openNav, setopenNav] = useState(false);

const navHandler = () => {
  setopenNav(!false);
}

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header onClick={navHandler}/>
        { openNav===true ? <Nav /> : ""}
        <TodoTemplate />
      </Wrapper>
    </>
  );
}

export default App;
