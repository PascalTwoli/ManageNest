import React, { useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { FaHome, FaUserAlt, FaCog, fas } from 'react-icons/fa'; // Import some icons


const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);


  // Toggle the expanded state
  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`d-flex`}>
      {/* Sidebar */}
      <div
        style={{
          width: expanded ? '250px' : '80px', // Width toggle
          transition: 'width 0.3s', // Smooth transition
        }}
        className=" text-white vh-100 side-bar"
      >
        <Button
          variant="primary"
          onClick={toggleSidebar}
          className="m-2 sidebar-toggle-btn"
        >
          {expanded ? 'T' : 'T'}
        </Button>
        <Nav className="flex-column">
          {/* Icons and text, toggle text visibility based on the state */}
          <Nav.Item className="d-flex align-items-center my-2">
            <FaHome className="me-2" size={24} />
            {expanded && <span>Home</span>}
          </Nav.Item>
          <Nav.Item className="d-flex align-items-center my-2">
            <FaUserAlt className="me-2" size={24} />
            {expanded && <span>Profile</span>}
          </Nav.Item>
          <Nav.Item className="d-flex align-items-center my-2">
            <FaCog className="me-2" size={24} />
            {expanded && <span>Settings</span>}
          </Nav.Item>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-3">
        <h1>Main Content Area</h1>
        <p>This is where your main page content goes.</p>
      </div>
    </div>
  );
};

export default Sidebar;