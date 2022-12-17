import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Headers = styled.div`
    margin-left: 5px;
    margin-top: 5px;

    .menu {
        font-size: 25px;
        cursor: pointer;
    }

    span {
        font-size: 25px;
        margin-left: 5px;
    }
`

function Header({navHandler}) {
    return (
        <Headers>
          <FontAwesomeIcon className="menu" icon={faBars} onClick={navHandler}/>
          <span> Do Eat!</span>
        </Headers>
    );
}

export default Header;