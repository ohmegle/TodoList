import { useState } from 'react';
import styled from 'styled-components';

// 추가 버튼을 누를때 json server에 post 요청을 넣는다..?
// useState를 사용해서 input창의 값이 바뀌면 만듦..
// 비워주면 렌더링 됨..

const InputWrapper = styled.div`
    display: flex;
    margin-left: 30px;

    input {
        width: 250px;
        border: 2px solid black;
        border-radius: 30px;
    }

    button {
        width: 50px;
        height: 30px;
        border-radius: 45px;
        border: 0px;
        cursor: pointer;
        margin-left: 20px;
        background-color: #3BD09C;
        color: white;
        font-weight: bold;
    }
    
    button:hover {
        background-color: #35B488;
        border: 1px solid #227C5D;
    }
`

function TodoInput({ change, setChange }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        if(text !== ''){
            fetch("http://localhost:3001/todos", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "text": text
            })
            }).then(() => {
                setText('');
                setChange(!change)
            });
        } else {
            alert("todo를 입력해주세요!");
        }
    }

    // const handleEnter = () => {
    // }


    return (
        <InputWrapper>
            <input
                className="inputStyle"
                placeholder="Add a new task..."
                onChange={(e) => {setText(e.target.value); }}
                value={text}
            />
            <button onClick={handleSubmit}>추가</button>
        </InputWrapper>
    );
}

export default TodoInput;   