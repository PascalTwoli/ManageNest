import Offcanvas from 'react-bootstrap/Offcanvas';
import { Form, Alert, Button } from 'react-bootstrap';
import { useState } from 'react';
import { supabase } from './helper/supabaseClient';
import { transactionRef } from './services/tenantService';

function PaymentsOffcanvas({ show, handleClose }) {

    const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

    const [contactData, setContactData] = useState({
        // paymentDate: "",
        paymentMethod: "",
        transactionRef: "",
        rentAmount: "",
    });

    const handleInputChange = (e) => {
		const { name, value } = e.target;
		setContactData((preveData) => ({
			...preveData,
			[name]: value,
		}));
	};

    const handleSubmit = async (e) => {
       try {
        e.preventDefault()
            const {data, error} = await supabase
            .from("payments")
            .insert([{...contactData}])

            if (error) {
				console.error("Supabase error:", error.message); //log full error details
				setError(error.message); 
				return; // Exit if there's an error
			}

            setContactData({
        
                // paymentDate: "",
                paymentMethod: "",
                transactionRef: "",
                rentAmount: "",
            });
            
            setSuccess(true)
            setError(null);
			alert("Data submitted successfully!")
            
       } catch (error) {
        console.error("Error submitting the form: ", error);
        setError("Error submitting the form");
       }
    }
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end" className='offCanvas'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Payments</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className=''>
        <h6>Add payment</h6>
        
        <Form onSubmit={handleSubmit} className="row">
            {error && <Alert variant="danger">{error}</Alert>}
            {success && (
                <Alert variant="success">Tenant data submitted to the database successfully!</Alert>
            )}
            {/* <Form.Group className="mb-3 col-4" controlId="">
                <Form.Label
                    as="p"
                    variant="text-primary"
                    className="form-label text-primary">
                    Payment date
                </Form.Label>
                <Form.Control
                    type="text"
                    name="paymentDate"
                    value={contactData.paymentDate}
                    onChange={handleInputChange}
                    placeholder=""
                    className="form-input"
                />
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="formBasicnumber">
                <Form.Label
                    as="p"
                    variant="text-primary"
                    className="form-label text-primary">
                    Rent amount
                </Form.Label>
                <Form.Control
                    type="text"
                    name="rentAmount"
                    value={contactData.rentAmount}
                    onChange={handleInputChange}
                    placeholder=""
                    className="form-input"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label
                    as="p"
                    variant="text-primary"
                    className="form-label text-primary">
                    Payment method
                </Form.Label>
                <Form.Control
                    type="text"
                    name="paymentMethod"
                    value={contactData.paymentMethod}
                    onChange={handleInputChange}
                    placeholder=""
                    className="form-input"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label
                    as="p"
                    variant="text-primary"
                    className="form-label text-primary">
                    Transaction Ref
                </Form.Label>
                <Form.Control
                    type="text"
                    name="transactionRef"
                    value={contactData.transactionRef}
                    onChange={handleInputChange}
                    placeholder=""
                    className="form-input"
                />
            </Form.Group>       
            <Button variant="primary" className="submit-btn" type="submit" style={{
                "height": "fit-content",
                "marginTop": "33px",
            }}>
					Add
			</Button>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default PaymentsOffcanvas;