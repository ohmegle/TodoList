import styled from "styled-components";


const TodoHead = styled.div`
    margin-left: 30px;
    h1 {
        margin-left: 65px;
        font-size: 25px;
    }

    h2{
        font-size: 20px;
        margin-top: 0;
        margin-bottom: 5px;
    }
`

function TodoInformation() {
    return (
        <TodoHead>
            <h1>2022년 12월 16일 (금)</h1>
            <span>today</span>
            <h2>To do list</h2>
        </TodoHead>
    )
}

export default TodoInformation;