import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import data from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircle } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Lists = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    padding-top: 12px;
    flex-direction: column;
    width: 400px;
    &:hover {
        ${Remove} {
            display: initial;
        }
    }

    ul {
        list-style: none;
    }

    .image {
      width: 150px;
      margin-top: 50px;
    
    }
`;

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
    &:hover {
        color: gray;
    }
    display: none;
`;


// 누르면 faCircleCheck 다시 누르면 faCircle 

function TodoList() {
    return (
        <Lists>
            <FontAwesomeIcon icon={faCircleCheck} />
            <FontAwesomeIcon icon={faCircle} />
            <ul>
                { 
                    data.map((el) => {
                        return <li>{el.text}</li>
                    })
                }
            </ul>     
            <Remove>
                <FontAwesomeIcon icon={faTrash} />
            </Remove>
            
            <img className="image" src="https://i.pinimg.com/564x/5d/6f/d1/5d6fd1521ea4f125c701c3c423046bd3.jpg" />
            <Footer />
        </Lists>
    );
}

export default TodoList;