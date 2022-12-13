import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const HeaderText = styled.span`
    font-size: 20px;
`


function Header() {
    return (
        <>
          <FontAwesomeIcon icon={faBars} />
          <HeaderText> Do eat!</HeaderText>
        </>
    );
}

export default Header;