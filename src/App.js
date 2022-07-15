import './App.css';
import React
// { useState, useEffect } 
from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Contacts from './components/Contacts';
// import userData from './data/user';


const App = () => {
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   setUser(userData)
  // }, [])

  return (
    <Router>
      <div className='App'>
        <Nav />
      </div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
    </Router>
  );
}

export default App;
