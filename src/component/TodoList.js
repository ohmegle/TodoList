import { useEffect, useState } from "react";
import styled from "styled-components";
import Todo from "./Todo";

const Lists = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: -10px;
   
    ul {
        list-style: none;
        padding: 0;
    }
`;

function TodoList({ change, setChange }) {
    const [todos, setTodos] = useState([]);
            
    useEffect(()=> {
        fetch("http://localhost:3001/todos")
            .then(res => res.json())
            .then(res => setTodos(res))
            .catch(e => console.log(e));
    }, [change])

    return (
        <Lists>
            <ul>
                { 
                    todos.map((el,idx) => {
                        return(
                            <Todo key={idx} todo={el} change={change} setChange={setChange} />
                        )
                    })
                }
            </ul>      
        </Lists>
    );
}

export default TodoList;