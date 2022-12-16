import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircle } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import DeleteTodo from "./DeleteTodo";


const ListComponent = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    
    .circleIcon {
        width: 30px;
        color: black;
        cursor: pointer;
    }

    li{
        width: 250px;
        font-size: 13px;
    }
`

const Todo = ({todo, change, setChange}) => {
    const [ checked, setChecked ] = useState(false);
    
    const handleChecked = (e) => {
        setChecked(!checked);
    }

    return (
        <ListComponent> 
            { 
                checked === false ? <FontAwesomeIcon className="circleIcon" icon={faCircle} onClick={handleChecked}/> :
                <FontAwesomeIcon className="circleIcon" icon={faCircleCheck} onClick={handleChecked}/>
            }
            <li>{todo.text}</li>
            <DeleteTodo id={todo.id} change={change} setChange={setChange} />
        </ListComponent>
    )
}

export default Todo;