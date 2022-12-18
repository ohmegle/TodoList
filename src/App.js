import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const Main = styled.div`
  a{
    margin: 0 auto;
    border: 3px solid #efe5dc;
    padding: 0;
    margin-top: 100px;
    width: 400px;
    height: 600px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);

  }

  .link {
    margin-top: 100px;
    margin-bottom: 20px;
    text-decoration:none;
    font-size: 40px;
    color: black;
  }

  .paw {
    font-size: 30px;
  }

  a > img {
    width: 280px;
    height: 300px;
  }

  a > .head:hover {
    background:linear-gradient(to top, #FEC5BB 50%, transparent 50%);
  }

  a > .click {
    margin-top: 20px;
    margin-bottom: -30px;
    z-index: 20;
    font-size: 10px;
  }
`


function App() {
  return (
    <Main>
          <Link className="link" to="/Today">
            <span className="head">Start your day 
              <FontAwesomeIcon className="paw" icon={faPaw} />
            </span>
            <span className="click">Click me! Meow</span>
            <img 
              src="https://i.pinimg.com/564x/5d/6f/d1/5d6fd1521ea4f125c701c3c423046bd3.jpg" 
              alt="메인 이미지" />
          </Link>
    </Main>
  );
}

export default App;
