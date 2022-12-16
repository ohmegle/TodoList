import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import Calendar from './pages/Calendar';
import Latest from './pages/Latest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/calendar" element={<Calendar/>}/>
      </Routes>
  </BrowserRouter>
);