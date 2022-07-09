import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';

import DashboardPage from './pages/DashboardPage/DashboardPage';
import FormRoom from './pages/Forms/FormRoom';
import ViewListRoom from './pages/Views/ViewListRoom';
import Prueba from './pages/Prueba/Prueba';

import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
     
      <Route path='/DashboardPage' element={<DashboardPage />}></Route>
      <Route path='/FormRoom' element={<FormRoom />}></Route>
      <Route path='/ViewListRoom' element={<ViewListRoom />}></Route>

      <Route path='/Prueba' element={<Prueba />}></Route>

    </Routes>
  </BrowserRouter>
);
