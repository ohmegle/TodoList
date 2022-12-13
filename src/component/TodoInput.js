import { text } from "@fortawesome/fontawesome-svg-core";
import React, { useState } from "react";
import styled from "styled-components";
import data from "../data/data";



function TodoInput() {
    const [todoText, settodoText] = useState('');


    const onChangeInput = (e) => {
        settodoText(e.target.value);
    }

    const onClickAddButton = () => {
        const nextTodoList = data.concat({
            id: data.length + 1, 
            text,
            checked: false
        })
        settodoText
    }

    return (
        <>
            <input className="inputStyle" placeholder="Add a new task..." value={text} onChange={onChangeInput}/>
            <button onClick={onClickAddButton}>추가</button>
        </>
    );
}

export default TodoInput;