import React from "react";
import styled from "styled-components";
import data from "../data/data";

const TodoHead = styled.div`
    h1 {
        font-size: 20px;
    }

    .today {
        
    }


`
// {date.toDateString}


function TodoInformation() {
    return (
        <TodoHead>
            <h1>new Date().toDateString()</h1>
            <div className="today">today</div>
            <h2>To do list</h2>
            <span>{data.length} tasks</span>
        </TodoHead>
    )
}

export default TodoInformation;