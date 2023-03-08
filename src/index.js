import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import App from './App';
// import Layout from "./Layout";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Routes>
        <Route path="/notes" element={<Layout />}>
          {/* <Route path="" element={<Navigate to="/notes" replace={true} />}>
          </Route> */}
      {/* <Route  /> */}
      {/* </Route> */}
      {/* </Routes> */}
    </BrowserRouter>
  </React.StrictMode>
);
