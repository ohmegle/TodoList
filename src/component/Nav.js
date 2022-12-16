import styled from "styled-components";
import { BiLeftArrowAlt, BiCalendarEdit, BiLayer, BiCalendar, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const NavBar = styled.div`
    width: 200px;
    height: 1000px;
    background-color: #F9D096;
    font-size: 25px;
    margin-top: -10px;
    margin-left: -120px;
    
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
        width: 84px;
        margin-left: 7px;
    }

    .arrow {
        margin-left: 40px;
        cursor: pointer;
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
                <BiChevronRight className="arrow"/>
            </div>
            <div>
                <BiLayer />
                <span>latest</span>
                <Link to="/latest"><BiChevronRight className="arrow"/></Link>
            </div>
            <div>
                <BiCalendar/>
                <span>calendar</span>
                <BiChevronRight className="arrow"/>
            </div>
        </NavBar>
    )
}

export default Nav;