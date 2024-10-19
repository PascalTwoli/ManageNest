import './App.css';
import React from 'react';
import Signin from './signin.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'react-bootstrap';
import Signup from './signup.component';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';


// window.React1 = require('react');

function App() {
  return (

        <Router>
            <div>
              <Routes>
                <Route  path="/" element={<Navigate to="/signup" />}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/signin' element={<Signin/>}/>
              </Routes>
            </div>
        </Router>

  );
}

export default App;
