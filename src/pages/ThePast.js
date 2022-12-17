import styled from "styled-components";
import Nav from "../component/Nav";
import Header from "../component/Header";
import pastData from "../data/pastData";
import Past from "../component/Past.js";

const Wrapper = styled.div`
    display: flex;
`

const Template = styled.div`
    margin: 0 auto;
    width: 400px;
    height: 1530px;
    border-left: 3px solid black;
    border-right: 3px solid black;
    background-color: #E8E8E4;
`

const ThePast = () => {
    return ( 
        <Wrapper>
            <Header />
            <Nav />
            <Template> 
                    { 
                        pastData.map((el,idx) => {
                            return(
                                <Past key={idx} text={el.text} createdAt={el.createdAt}/>
                            )
                        })
                    }
            </Template>
        </Wrapper>
    )
}

export default ThePast;