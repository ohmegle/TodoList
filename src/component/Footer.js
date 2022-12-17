import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const FootWrapper = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    align-items: center;
    margin-top: 410px;
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
        font-size: 15px;
        color: gray;
    }
`

function Footer() {
    return (
        <FootWrapper>
            <img 
                alt="No_Image"
                src="https://i.pinimg.com/originals/5d/6f/d1/5d6fd1521ea4f125c701c3c423046bd3.jpg" />
            <span>오늘 하루의 가치는 내일보다 두배의 가치가 있다.</span>
            <FontAwesomeIcon className="paw" icon={faPaw} />
        </FootWrapper>
    )
}

export default Footer;