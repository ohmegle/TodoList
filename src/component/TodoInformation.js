import styled from "styled-components";


const TodoHead = styled.div`
    margin-left: 30px;
    margin-top: 40px;
    font-weight: bold;

    span {
        margin-left: 65px;
        font-size: 25px;
        background:linear-gradient(to top, #FEC5BB 50%, transparent 50%);
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
            <span>2022년 12월 16일 (금)</span>
            <div>today</div>
            <h2>To do list</h2>
        </TodoHead>
    )
}

export default TodoInformation;