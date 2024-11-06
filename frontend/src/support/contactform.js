import { useState } from "react";
import { Form, Alert, Button } from "react-bootstrap";
import { supabase } from "../helper/supabaseClient";

export function ContactForm () {
    const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

    const [contactData, setContactData] = useState({
        username: "",
        email: "",
        issuetype: "",
        description: "",
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
            .from("contactform")
            .insert([{...contactData}])

            if (error) {
				console.error("Supabase error:", error.message); // Log full error details
				setError(error.message); // Display exact error in UI
				return; // Exit if there's an error
			}

            setContactData({
                username: "",
                email: "",
                issuetype: "",
                description: "",
    
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
        <>
        <Form onSubmit={handleSubmit} className="row">
            {error && <Alert variant="danger">{error}</Alert>}
            {success && (
                <Alert variant="success">Tenant data submitted to the database successfully!</Alert>
            )}
            <Form.Group className="mb-3 col-4" controlId="formBasicName">
                <Form.Label
                    as="p"
                    variant="text-primary"
                    className="form-label text-primary">
                    Name
                </Form.Label>
                <Form.Control
                    type="text"
                    name="username"
                    value={contactData.username}
                    onChange={handleInputChange}
                    placeholder=""
                    className="form-input"
                />
            </Form.Group>
            <Form.Group className="mb-3 col-4" controlId="formBasicEmail">
                <Form.Label
                    as="p"
                    variant="text-primary"
                    className="form-label text-primary">
                    Email
                </Form.Label>
                <Form.Control
                    type="text"
                    name="email"
                    value={contactData.email}
                    onChange={handleInputChange}
                    placeholder=""
                    className="form-input"
                />
            </Form.Group>
            <Form.Group className="mb-3 col-4" controlId="formBasicName">
                <Form.Label
                    as="p"
                    variant="text-primary"
                    className="form-label text-primary">
                    Issue type
                </Form.Label>
                <Form.Control
                    type="text"
                    name="issuetype"
                    value={contactData.issuetype}
                    onChange={handleInputChange}
                    placeholder=""
                    className="form-input"
                />
            </Form.Group>
            <Form.Group className="mb-3 col-4" controlId="formBasicTextarea">
                <Form.Label
                    as="p"
                    variant="primary"
                    className="form-label text-primary">
                    Description
                </Form.Label>
                <Form.Control
                    type="email"
                    name="description"
                    value={contactData.description}
                    onChange={handleInputChange}
                    as="textarea"
                    rows={1}
                    placeholder=""
                    className="form-input"
                />
            </Form.Group>
            <Button variant="primary" className="submit-btn col-2" type="submit" style={{
                "height": "fit-content",
                "marginTop": "33px",
            }}>
					Submit
			</Button>
        </Form>
        </>
    )
}