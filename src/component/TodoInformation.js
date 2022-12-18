import styled from "styled-components";


const TodoHead = styled.div`
    margin-left: 30px;
    margin-top: 40px;
    font-weight: bold;

    span {
        margin-left: 65px;
        margin-bottom: 20px;
        font-size: 25px;
        background:linear-gradient(to top, #FEC5BB 50%, transparent 50%);
    }

    h2{
        font-size: 20px;
        margin-top: 10px;
    }
`

function TodoInformation() {
    const today = new Date();
    const date = ['일','월','화','수','목','금','토']

    return (
        <TodoHead>
            <span>{`${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 (${date[today.getDay()]})`}</span>
            <div>today</div>
            <h2>To do list</h2>
        </TodoHead>
    )
}

export default TodoInformation;