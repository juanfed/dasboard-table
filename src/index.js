import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// importaciones para poder trabajar con las rutas
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// importaciones de las paginas
import Planificar from './pages/Planificar';
import Revisar from './pages/Revisar';
import Error404 from './pages/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/planificar" element={<Planificar />} />
        <Route path="/revisar" element={<Revisar />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
