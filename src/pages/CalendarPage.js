import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Header from "../component/Header";
import Nav from "../component/Nav";
import styled from "styled-components";
import catImage from "../img/cat.png";
import "../index.css";

const Wrapper = styled.div`
    display: flex;
`

const Template = styled.div`
    margin: 0 auto;
    margin-top: 100px;
    width: 400px;
    height: 600px;
    border: 3px solid #FFE5D9;
    background-color: white;
    display: flex;
    flex-direction: column;
    
    /* react calendar 부분 */
    .react-calendar__navigation__label > span {
        font-size: 20px;
        font-weight: bold;
        color: black;
        font-family: "Flowersalt";
    }
    .react-calendar__month-view__weekdays {
        background: #FEC89A;
        border-radius: 45px;
        font-family: "Flowersalt";

        abbr { 
            color: black;
            font-size: 1rem;
            font-weight: 500;
            text-decoration:none;
            }
    }

    .react-calendar__tile--active {
        color: white;
        background-color: #AAC4FF;
        border-radius: 45px;
    }

    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
        background-color: #87A2FB;
        color: white;
        font-family: "Flowersalt";
    }
    .react-calendar__tile {
        font-family: "Flowersalt";
  }

    .react-calendar {
        margin-top: 50px;
        width: 400px;
        height: 300px;
        border: 0px;
        font-family: "Flowersalt";
    }

    .react-calendar__tile--now {
        background: #ADA2FF;
        color: white;
        font-weight: bold;
        border-radius: 45px;
        font-family: "Flowersalt";
    }

    .react-calendar__tile--now:enabled:hover,
    .react-calendar__tile--now:enabled:focus {
        color: white;
        font-weight: bold;
        background-color: #6D67E4;
        font-family: "Flowersalt";
    }
    
    img {
        position: fixed;
        width: 200px;
        margin-left: 200px;
        margin-top: 400px;
    }
`

const CalendarPage = () => {
    return (
        <Wrapper>
            <Header />
            <Nav />
            <Template>
                <Calendar className="styleCalendar" />
                <img 
                    alt="cat"
                    src={catImage}
                />
            </Template>
        </Wrapper>
    )
}

export default CalendarPage;