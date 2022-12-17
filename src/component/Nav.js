import styled from "styled-components";
import { BiLeftArrowAlt, BiCalendarEdit, BiLayer, BiCalendar, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const NavBar = styled.div`
    position : fixed;
    top : 0px;
    left : 0px;
    width: 220px;
    height: 1000px;
    background-color: #FFE5D9;
    font-size: 25px;
    z-index: 500;
    box-shadow: 0px 0px 5px 5px gray;
    
    .close {
        margin-left: 162px;
        cursor: pointer;
        color: #443F4A
    }

    > div {
        margin-top: 20px;
        margin-left: 5px;
    }

    span {
        display: inline-block;
        width: 100px;
        margin-left: 7px;
    }

    .arrow {
        margin-left: 40px;
        cursor: pointer;
        color: black;
    }
`

function Nav({navHandler}) {
    return (
        <NavBar>
            <div className="close">
                <BiLeftArrowAlt onClick={navHandler}/>
            </div>
            <div>
                <BiCalendarEdit/>
                <span>today</span>
                <Link to="/today"><BiChevronRight className="arrow"/></Link>
            </div>
            <div>
                <BiLayer />
                <span>the past</span>
                <Link to="/thePast"><BiChevronRight className="arrow"/></Link>
            </div>
            <div>
                <BiCalendar/>
                <span>calendar</span>
                <Link to="/calendar"><BiChevronRight className="arrow"/></Link>
            </div>
        </NavBar>
    )
}

export default Nav;