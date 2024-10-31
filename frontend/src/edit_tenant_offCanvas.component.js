// EditTenantOffCanvas.js
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

function EditTenantOffCanvas({ show, onClose, tenantData, onSave }) {
  const [editedTenantData, setEditedTenantData] = useState(tenantData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTenantData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = () => {
    tenantData = {...tenantData, editedTenantData}

    onSave(editedTenantData); // pass edited data back to parent
    onClose(); // close the OffCanvas
  };

  return (
    <Offcanvas show={show} onHide={onClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Edit Tenant Details</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
            <Form>   
                <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label
                    as="p"
                    variant="text-primary"
                    className="form-label text-primary">
                    First name
                </Form.Label>
                <Form.Control
                    type="text"
                    name="tenantFirstName"
                    value={editedTenantData.tenantFirstName || ""}
                    onChange={handleInputChange}
                    placeholder="Enter the first name"
                    className="form-input"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label
                    as="p"
                    variant="primary"
                    className="form-label text-primary">
                    Last name
                </Form.Label>
                <Form.Control
                    type="text"
                    name="tenantLastName"
                    value={editedTenantData.tenantLastName || ""}
                    onChange={handleInputChange}
                    placeholder="Last name"
                    className="form-input"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhonenumber">
                <Form.Label
                    as="p"
                    variant="primary"
                    className="form-label text-primary">
                    Phone number
                </Form.Label>
                <Form.Control
                    type="number"
                    name="tenantPhoneNumber"
                    value={editedTenantData.tenantPhoneNumber || ""}
                    onChange={handleInputChange}
                    placeholder="Phone number"
                    className="form-input"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label
                    as="p"
                    variant="primary"
                    className="form-label text-primary">
                    Email
                </Form.Label>
                <Form.Control
                    type="email"
                    name="tenantEmail"
                    value={editedTenantData.tenantEmail || ""}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="form-input"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicID">
                <Form.Label
                    as="p"
                    variant="primary"
                    className="form-label text-primary">
                    National Id
                </Form.Label>
                <Form.Control
                    type="number"
                    name="tenantNationalId"
                    value={editedTenantData.tenantNationalId || ""}
                    onChange={handleInputChange}
                    placeholder="National Id"
                    className="form-input"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicOccupation">
                <Form.Label
                    as="p"
                    variant="primary"
                    className="form-label text-primary">
                    Occupation
                </Form.Label>
                <Form.Control
                    type="text"
                    name="tenantOccupation"
                    value={editedTenantData.tenantOccupation || ""}
                    onChange={handleInputChange}
                    placeholder="Occupation"
                    className="form-input"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicBlockname">
                <Form.Label
                    as="p"
                    variant="primary"
                    className="form-label text-primary">
                    Block name
                </Form.Label>
                <Form.Control
                    type="text"
                    name="tenantBlockName"
                    value={editedTenantData.tenantBlockName || ""}
                    onChange={handleInputChange}
                    placeholder="Block name"
                    className="form-input"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUnitname">
                <Form.Label
                    as="p"
                    variant="primary"
                    className="form-label text-primary">
                    Unit name
                </Form.Label>
                <Form.Control
                    type="text"
                    name="tenantUnitName"
                    value={editedTenantData.tenantUnitName || ""}
                    onChange={handleInputChange}
                    placeholder="Unit name"
                    className="form-input"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label
                    as="p"
                    variant="primary"
                    className="form-label text-primary">
                    Move in date
                </Form.Label>
                <Form.Control
                    type="date"
                    name="tenantMoveInDate"
                    value={editedTenantData.tenantMoveInDate || ""}
                    onChange={handleInputChange}
                    placeholder="Move in date"
                    className="form-input"
                />
            </Form.Group>
            {/* lease information  */}
            <h6>Enter Lease Information</h6>
            <Form.Group className="mb-3" controlId="formBasicDeposit">
                <Form.Label
                    as="p"
                    variant="primary"
                    className="form-label text-primary">
                    Security Deposit
                </Form.Label>
                <Form.Control
                    type="number"
                    name="securityDeposit"
                    value={editedTenantData.securityDeposit || ""}
                    onChange={handleInputChange}
                    placeholder="e.g. 73200"
                    className="form-input"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRent">
                <Form.Label
                    as="p"
                    variant="primary"
                    className="form-label text-primary">
                    Monthly Rent
                </Form.Label>
                <Form.Control
                    type="number"
                    name="monthlyRent"
                    value={editedTenantData.monthlyRent || ""}
                    onChange={handleInputChange}
                    placeholder="e.g. 40400"
                    className="form-input"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRent">
                <Form.Label
                    as="p"
                    variant="primary"
                    className="form-label text-primary">
                    Previous Rent
                </Form.Label>
                <Form.Control
                    type="number"
                    name="prevMonthRent"
                    value={editedTenantData.prevMonthRent || ""}
                    onChange={handleInputChange}
                    placeholder="e.g. 40400"
                    className="form-input"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label
                    as="p"
                    variant="primary"
                    className="form-label text-primary">
                    Lease Start Date
                </Form.Label>
                <Form.Control
                    type="date"
                    name="leaseStartDate"
                    value={editedTenantData.leaseStartDate || ""}
                    onChange={handleInputChange}
                    placeholder="e.g. 12/10/2024"
                    className="form-input"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label
                    as="p"
                    variant="primary"
                    className="form-label text-primary">
                    Lease End Date
                </Form.Label>
                <Form.Control
                    type="date"
                    name="leaseEndDate"
                    value={editedTenantData.leaseEndDate || ""}
                    onChange={handleInputChange}
                    placeholder="e.g. 12/11/2024"
                    className="form-input"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLeaseStatus">
                <Form.Label
                    as="p"
                    variant="primary"
                    className="form-label text-primary">
                    Lease Status
                </Form.Label>
                <Form.Control
                    type="text"
                    name="leaseStatus"
                    value={editedTenantData.leaseStatus || ""}
                    onChange={handleInputChange}
                    placeholder="Active/Expired/Terminated"
                    className="form-input"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label
                    as="p"
                    variant="primary"
                    className="form-label text-primary">
                    Property Address
                </Form.Label>
                <Form.Control
                    type="text"
                    name="propertyAddress"
                    value={editedTenantData.propertyAddress || ""}
                    onChange={handleInputChange}
                    placeholder="e.g. King Garden"
                    className="form-input"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label
                    as="p"
                    variant="primary"
                    className="form-label text-primary">
                    Residence Type
                </Form.Label>
                <Form.Control
                    type="text"
                    name="residenceType"
                    value={editedTenantData.residenceType || ""}
                    onChange={handleInputChange}
                    placeholder="Apartment/House/Condo/Other"
                    className="form-input"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label
                    as="p"
                    variant="primary"
                    className="form-label text-primary">
                    Number of Bedrooms
                </Form.Label>
                <Form.Control
                    type="number"
                    name="bedroomNumber"
                    value={editedTenantData.bedroomNumber || ""}
                    onChange={handleInputChange}
                    placeholder="e.g. 3"
                    className="form-input"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label
                    as="p"
                    variant="primary"
                    className="form-label text-primary">
                    Number of Bathrooms
                </Form.Label>
                <Form.Control
                    type="number"
                    name="bathroomNumber"
                    value={editedTenantData.bathroomNumber || ""}
                    onChange={handleInputChange}
                    placeholder="e.g. 2"
                    className="form-input"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTextarea">
                <Form.Label
                    as="p"
                    variant="primary"
                    className="form-label text-primary">
                    Additional Terms and Conditions
                </Form.Label>
                <Form.Control
                    type="email"
                    name="additionalTerms"
                    value={editedTenantData.additionalTerms || ""}
                    onChange={handleInputChange}
                    as="textarea"
                    rows={3}
                    placeholder="Write here"
                    className="form-input"
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