import React, { useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import {FaCog } from 'react-icons/fa'; // Import some icons
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import {  RiLayoutFill } from "react-icons/ri";
import { SiReadthedocs } from "react-icons/si";
import { IoDocumentTextSharp } from "react-icons/io5";
import { IoMdPeople } from "react-icons/io";


const Sidebar = ({ onSelectComponent }) => {

    const [expanded, setExpanded] = useState(true);

    // Toggle the expanded state
    
    const toggleSidebar = () => {
      setExpanded(!expanded);
    };

    
    return (
      <div
        style={{
          width: expanded ? '200px' : '80px', // Width toggle
          transition: 'width 0.3s', // Smooth transition
        }}
        className=" text-white vh-100 side-bar position-relative"
      >
        <Button
          variant="primary"
          onClick={toggleSidebar}
          className="m-2 sidebar-toggle-btn position-absolute"
        >
          {expanded ? <GoArrowLeft className="me-2" size={18} />: <GoArrowRight className="me-2" size={18} />}
        </Button>
        <Nav className="flex-column">
          {/* Icons and text, toggle text visibility based on the state */}
          <Nav.Item className="d-flex align-items-center my-2 sidebar-div" onClick={() => onSelectComponent('tenant')}>
            < RiLayoutFill  className="me-2 sidebar-labels text-primary" size={24} />
            {expanded && <span>Tenants</span>}
          </Nav.Item><br/>
          <Nav.Item className="d-flex align-items-center my-2 sidebar-div" onClick={() => onSelectComponent('reports')}>
            <SiReadthedocs className="me-2 sidebar-labels text-primary" size={24} />
            {expanded && <span>Reports</span>}
          </Nav.Item><br/>
          <Nav.Item className="d-flex align-items-center my-2 sidebar-div" onClick={() => onSelectComponent('lease')}>
            <IoDocumentTextSharp className="me-2 sidebar-labels text-primary" size={24} />
            {expanded && <span>Lease</span>}
          </Nav.Item><br/>
          <Nav.Item className="d-flex align-items-center my-2 sidebar-div" onClick={() => onSelectComponent('settings')}>
            <FaCog className="me-2 sidebar-labels text-primary" size={24} />
            {expanded && <span>Settings</span>}
          </Nav.Item><br/>
          <Nav.Item className="d-flex align-items-center my-2 sidebar-div" onClick={() => onSelectComponent('support')}>
            <IoMdPeople  className="me-2 sidebar-labels text-primary" size={24} />
            {expanded && <span>Support</span>}
          </Nav.Item><br/>
        </Nav>

      </div>
    );
}

export default Sidebar;