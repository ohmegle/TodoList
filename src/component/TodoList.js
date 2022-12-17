import { useEffect, useState } from "react";
import styled from "styled-components";
import Todo from "./Todo";

const Lists = styled.div` 
    align-items: center;
    flex-direction: column;
    margin-left: 20px;
    z-index: 100;
    height: 20px;
   
    ul {
        list-style: none;
        padding: 0;
        width: 370px;
        height: 260px;
        overflow: hidden;
        overflow-y: scroll;
        overflow-x: hidden;
        ::-webkit-scrollbar{
            width: 10px;
        }
        ::-webkit-scrollbar-thumb{
            background-color: #BAD7E9;
            box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
            border-radius: 100px;
        }
        ::-webkit-scrollbar-track{
            background-color: #e4e4e4;
            border-radius: 100px;
        }
        
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