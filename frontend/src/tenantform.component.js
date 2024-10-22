import { Form, Button } from "react-bootstrap";

const TenantForm = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label as="p" variant="text-primary" className="form-label text-primary">First name</Form.Label>
                    <Form.Control type="text" placeholder="Enter the first name" className="form-input" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label as="p" variant="primary" className="form-label text-primary">Last name</Form.Label>
                    <Form.Control type="text" placeholder="Last name" className="form-input" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhonenumber">
                    <Form.Label as="p" variant="primary" className="form-label text-primary">Phone number</Form.Label>
                    <Form.Control type="number" placeholder="Phone number" className="form-input" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label as="p" variant="primary" className="form-label text-primary">Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" className="form-input" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicID">
                    <Form.Label as="p" variant="primary" className="form-label text-primary">National Id</Form.Label>
                    <Form.Control type="number" placeholder="National Id" className="form-input" />
                </Form.Group>                
                <Form.Group className="mb-3" controlId="formBasicOccupation">
                    <Form.Label as="p" variant="primary" className="form-label text-primary">Occupation</Form.Label>
                    <Form.Control type="text" placeholder="Occupation" className="form-input" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicBlockname">
                    <Form.Label as="p" variant="primary" className="form-label text-primary">Block name</Form.Label>
                    <Form.Control type="text" placeholder="Block name" className="form-input" />
                </Form.Group>                
                <Form.Group className="mb-3" controlId="formBasicUnitname">
                    <Form.Label as="p" variant="primary" className="form-label text-primary">Unit name</Form.Label>
                    <Form.Control type="text" placeholder="Unit name" className="form-input" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDate">
                    <Form.Label as="p" variant="primary" className="form-label text-primary">Move in date</Form.Label>
                    <Form.Control type="date" placeholder="Move in date" className="form-input" />
                </Form.Group>
                <Button variant="default" className="submit-btn" type="submit">
                    Enter lease information
                </Button> <br /><br />
                <Button variant="primary" className="submit-btn" type="submit">
                    Create
                </Button> <br /> <br />
            </Form>
        </div>
    );
}

export default TenantForm;