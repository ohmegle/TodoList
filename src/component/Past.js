import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircle } from "@fortawesome/free-regular-svg-icons";

const TodoBox = styled.div`
    display: flex;
    align-items: center;
    border-top: 2px dashed black;
    height: 300px;
    
    div {
        display: flex;
        margin: 0 auto;
        width: 200px;
        height: 150px;
        flex-direction: column;
        align-items: center;
    }

    div > span {
        font-size: 20px;
        font-weight: bold;
        background:linear-gradient(to top, #ffe400 50%, transparent 50%);
    }

    div > ul {
        list-style: none;
        padding: 0;
    }
`

const Past = ({text, createdAt}) => {
    return (
        <>
            <TodoBox>
                <div>
                    <span>{createdAt}</span>
                    <ul>                  
                        <li><FontAwesomeIcon icon={faCircleCheck} /> {text[0]}</li>
                        <li><FontAwesomeIcon icon={faCircle} /> {text[1]}</li>
                        <li><FontAwesomeIcon icon={faCircle} /> {text[2]}</li>
                        <li><FontAwesomeIcon icon={faCircleCheck} /> {text[3]}</li>
                    </ul>
                </div>
            </TodoBox>
        </>
    )
}

export default Past;