import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons"
import styled from "styled-components";


const UpdateComponent = styled.div`
    display:flex;

    button {
        margin-left: 0px;
        background-color: #3BD09C;
        width: 25px;
        height: 25px;
        color: white;
        border: 0px;
        border-radius: 30px;
        cursor: pointer;
    }

    div {
        position: fixed;
        z-index: 300;
        margin-left: -320px;
        width: 360px;
        height: 50px;
        background-color: gray;
    }
`

const UpdateTodo = () => {

    const [ openModal, setOpenModal ] = useState(false)

    const handleUpdate = () => {
        setOpenModal(!openModal)
    }

    return (
        <UpdateComponent>
            { openModal ? <div>안녕</div> : ""}
            <button><FontAwesomeIcon icon={faPenToSquare} onClick={handleUpdate}/></button>
        </UpdateComponent>
    )
};

export default UpdateTodo;