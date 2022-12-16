import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react";

const DeleteComponent = styled.div`
    display: flex;

    .update{
        margin-right: 3px;
        background-color: #3BD09C;
        width: 25px;
        height: 25px;
        color: white;
        border: 0px;
        border-radius: 30px;
        cursor: pointer;
    }

    .delete{
        background-color: #F7A4A4;
        width: 25px;
        height: 25px;
        color: white;
        border: 0px;
        border-radius: 30px;
        cursor: pointer;
    }
    `

function DeleteTodo({id, change, setChange}) {
    const handleDelete = (e) => {
        fetch(`http://localhost:3001/todos/${id}`, {
            method: "DELETE"})
            .then(res => res.json())
            .then(res => setChange(!change))
            .catch(e => console.log(e));
    }

    return (
    <DeleteComponent>
        <button className="update"><FontAwesomeIcon icon={faPenToSquare} /></button>
        <button className="delete"><FontAwesomeIcon icon={faTrashCan} onClick={handleDelete}/></button>
    </DeleteComponent>
    );
}

export default DeleteTodo;