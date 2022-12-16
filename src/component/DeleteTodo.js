import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons"

const DeleteComponent = styled.div`
    display: flex;

    button {
        margin-left: 10px;
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
        <button><FontAwesomeIcon icon={faTrashCan} onClick={handleDelete}/></button>
    </DeleteComponent>
    );
}

export default DeleteTodo;