import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useState } from "react";
import Nav from "./Nav";

const Headers = styled.div`
    .menu {
        font-size: 25px;
        cursor: pointer;
    }

    span {
        font-size: 25px;
        margin-left: 5px;
    }
`




function Header() {
    const [view, setView] = useState();


    const navHandler = (e) => {
        // display:none을 없애기
        // Nav 컴포넌트로 이동해서 
        setView(!view);
    }

    return (
        <Headers>
          { view ? <Nav /> : '' }
          <FontAwesomeIcon className="menu" icon={faBars} onClick={navHandler}/>
          <span> Do Eat!</span>
        </Headers>
    );
}

export default Header;