import styled from "styled-components";
import TodoTemplate from "../component/TodoTemplate";
import Header from "../component/Header";
import Nav from "../component/Nav";
import { useState } from "react";

const Wrapper = styled.div`
    display: flex;
`

function Today() {

const [openNav, setopenNav] = useState(false);

const navHandler = () => {
  setopenNav(!openNav);
} 

  return (
    <>
        <Wrapper>
          <Header navHandler={navHandler}/>
          { openNav ? <Nav navHandler={navHandler} /> : ""}
          <TodoTemplate />
        </Wrapper>
    </>
  );
}

export default Today;
