import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const FootWrapper = styled.div`
    display: flex;
    position: fixed;
    flex-direction: row;
    align-items: center;
    margin-top: 550px;
    margin-left: 100px;

    img {
        width: 150px;
        margin-top: 0px;
        opacity: 0.6;
    }

    span{
        font-size: 10px;
        color: gray;
    }

    .paw {
        font-size: 10px;
        color: gray;
    }
`

function Footer() {
    return (
        <FootWrapper>
            <span>오늘 하루의 가치는 내일보다 두배의 가치가 있다. </span>
            <FontAwesomeIcon className="paw" icon={faPaw} />
        </FootWrapper>
    )
}

export default Footer;