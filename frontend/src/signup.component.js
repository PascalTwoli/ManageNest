import { Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "./logo.jpeg";
import { handleSignupToManageNest } from "./services/adminServices";


export default function Signup() {
	//function to switch from the signup component to signin component
	const navigate = useNavigate();
	const handleSigninClick = () => {
		navigate("/signin");
	};

	//function

	// submitting the form to the server
	const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
		phone: '',
    });

    // const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

	//handling the input validation state


    //handle form input change
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((preveData) => ({
            ...preveData,
            [name]: value
        }))
    }

    //handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); //prevent default form behavior;
		const { username, email, phone, password } = formData;

        try {
			await handleSignupToManageNest(username, email, phone, password);
			alert('Signup successful!');  
            // const response = await fetch ('https://example.com/api/form-submit', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formData),
            // })

            // if (response.ok) {
            //     // const result = await response.json();
            //     // console.log('Form submitted successfully:', result);
            //     setSuccess(true)
            //     // You can show success feedback to the user here
            // } else {
            //     setError('Failed to submit the form');
            // }

            // localStorage.setItem('formData', JSON.stringify(formData));

            // setSuccess(true);
            // setError(null);
            // console.log('Form data saved to local storage:', formData);
            navigate("/mainbody")
        } catch (error) {
            // console.error('Error submitting the form: ', error);
            // setError('Error submitting the form');
			alert(`Signup failed: ${error.message}`);
        } 
        // finally {
        //     setLoading(false);
        // }

    };

	return (
		<div className="container container1">
			<div className="row d-flex">
				<div className="col-md-5 bg-primary left-bar">
					<div className="logo-div">
						<img src={logo} alt="" className="logo" />
					</div>
					<div className="d-flex left-div-cnter">
						<h1 className="">Have An Account?</h1>
						<p>
							{" "}
							To keep connected with us please <br />
							login with your personal details{" "}
						</p>
						<Button
							as="a"
							variant="default"
							className="signup-btn"
							onClick={handleSigninClick}>
							SIGN IN
						</Button>
					</div>
				</div>
				<div className="col-md-6 d-flex">
					<div className="class-for-form-signup">
						<h1 className="text-primary sign-in-h1">Create an Account</h1>
						<p className="text-default text-1">
							or use your e-mail account
						</p>

						<Form  onSubmit={handleSubmit}>
                            {error && <Alert variant="danger">{error}</Alert>}
                            {success && <Alert variant="success">Form submitted successfully!</Alert>}
							<Form.Group className="mb-3" controlId="formBasicUsername">
								<Form.Label
									as="p"
									variant="text-primary"
									className="form-label text-primary">
									Name
								</Form.Label>
								<Form.Control
									type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
									placeholder="Enter your name"
									className="form-input"
									required
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicphoneNumber">
								<Form.Label
									as="p"
									variant="text-primary"
									className="form-label text-primary">
									Phone number
								</Form.Label>
								<Form.Control
									type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
									placeholder="Enter phone number"
									className="form-input"
									required
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label
									as="p"
									variant="text-primary"
									className="form-label text-primary">
									Email
								</Form.Label>
								<Form.Control
									type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
									placeholder="Enter email"
									className="form-input"
									required
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label
									as="p"
									variant="primary"
									className="form-label text-primary">
									Password
								</Form.Label>
								<Form.Control
									type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
									placeholder="Password"
									className="form-input"
									required
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicCheckbox">
								<Form.Check
									type="checkbox"
                                    name="remember"
                                    value={formData.remember}
                                    onChange={handleInputChange}
									label="Remember me"
									className="text-primary"
								/>
							</Form.Group>
							<Button
								variant="primary"
								className="submit-btn"
								type="submit">
								Sign up
							</Button>{" "}
							<br /> <br />
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
}
