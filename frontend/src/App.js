import logo from './logo.svg';
import './App.css';
import React from 'react';
import Create from './signin.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'react-bootstrap';



function App() {
  return (
    <div className=".App min-vh-100 d-flex justify-content-center align-items-center">
        <Create/>
    </div>
  );
}

export default App;
