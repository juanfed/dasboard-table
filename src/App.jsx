import React, { Fragment} from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
}

export default App;
