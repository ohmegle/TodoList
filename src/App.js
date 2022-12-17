import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const Main = styled.div`
    margin: 0 auto;
    padding: 0;
    margin-top: 100px;
    width: 400px;
    height: 600px;
    border: 3px solid black;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

  .link {
    margin-top: 20px;
    margin-bottom: 20px;
    text-decoration:none;
    font-size: 40px;
    color: black;
  }

  .paw {
    font-size: 30px;
  }

  img {
    width: 100%;
    height: 80%;
  }
`


function App() {
  return (
    <Main>
          <Link className="link" to="/Today">
            <span>Start your day </span>
            <FontAwesomeIcon className="paw" icon={faPaw} />
          </Link>
          <img 
          src="https://pbs.twimg.com/media/DsRsiNwVYAIsUEs?format=jpg&name=900x900" 
          alt="메인 이미지"
          />
    </Main>
  );
}

export default App;
