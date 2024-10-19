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
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';




function App() {
  return (
    <div className=".App min-vh-100 d-flex justify-content-center align-items-center">
        <Signup/>
    </div>
  );
}

export default App;
