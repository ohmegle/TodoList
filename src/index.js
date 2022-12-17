import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import CalendarPage from './pages/CalendarPage';
import ThePast from './pages/ThePast';
import Today from './pages/Today';
import { createGlobalStyle } from 'styled-components';
import "./index.css";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Flowersalt";
    padding : 0px;
    margin : 0px;
    box-sizing: border-box;
    background-color: #d8e2dc;
  }  
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalStyle />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/today" element={<Today />} />
        <Route path="/thePast" element={<ThePast />} />
        <Route path="/calendar" element={<CalendarPage/>}/>
      </Routes>
  </BrowserRouter>
);