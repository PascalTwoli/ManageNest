import { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

function EditTenantOffCanvas({ show, onClose, tenantData, onSave }) {
  const [editedTenantData, setEditedTenantData] = useState(tenantData || {});

  useEffect(() => {
    setEditedTenantData(tenantData);
  }, [tenantData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTenantData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = () => {
    onSave(editedTenantData);
    onClose();
  };

  return (
    <Offcanvas show={show} onHide={onClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Edit Tenant Details</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form>
          {/* Personal Information */}
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="tenantFirstName"
              value={editedTenantData.tenantFirstName || ""}
              onChange={handleInputChange}
              placeholder="Enter the first name"
              required
            />
          </Form.Group>

          {/* Repeat similar groups for each field */}
          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="tenantLastName"
              value={editedTenantData.tenantLastName || ""}
              onChange={handleInputChange}
              placeholder="Enter the last name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              name="tenantPhoneNumber"
              value={editedTenantData.tenantPhoneNumber || ""}
              onChange={handleInputChange}
              placeholder="Enter phone number"
              required
            />
          </Form.Group>

          {/* Additional form fields like Email, National ID, etc. */}

          {/* Lease Information */}
          <h6 className="mt-4">Enter Lease Information</h6>
          <Form.Group className="mb-3" controlId="formSecurityDeposit">
            <Form.Label>Security Deposit</Form.Label>
            <Form.Control
              type="number"
              name="securityDeposit"
              value={editedTenantData.securityDeposit || ""}
              onChange={handleInputChange}
              placeholder="e.g., 73200"
              min={0}
            />
          </Form.Group>

          {/* More lease details */}
          
          <Form.Group className="mb-3" controlId="formAdditionalTerms">
            <Form.Label>Additional Terms and Conditions</Form.Label>
            <Form.Control
              as="textarea"
              name="additionalTerms"
              value={editedTenantData.additionalTerms || ""}
              onChange={handleInputChange}
              rows={3}
              placeholder="Write here"
            />
          </Form.Group>

          <Button variant="success" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default EditTenantOffCanvas;