import { Button, ButtonGroup, Dropdown, Form } from "react-bootstrap";
import logo from './logo.jpeg';
import { useNavigate } from "react-router-dom";
import Signup from "./signup.component";

export default function  Signin () {

    const navigate = useNavigate();
    const handleSignupClick = () => {
        navigate('/signup');
    }

    return(
        <div className="container container1">
            <div className="row d-flex">
                <div className="col-md-6">
                    <div>
                        <img src={logo} alt="" className="logo"/>
                    </div>
                    <div className="class-for-form">
                        <h1 className="text-primary sign-in-h1">Sign into ManageNest</h1>
                        <p className="text-default text-1">or use your e-mail account</p>                    
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label as="p" variant="text-primary" className="form-label text-primary">Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" className="form-input" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label as="p" variant="primary" className="form-label text-primary">Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" className="form-input" />
                            </Form.Group>
                            <Button variant="primary" className="submit-btn" type="submit">
                                Sign in
                            </Button> <br /> <br />
                            <Form.Text as="a" className="text-primary">Forgot password?</Form.Text>
                        </Form>
                    </div>
                </div>
                <div className="col-md-5 bg-primary d-flex right-bar">
                    <h1 className="">Have No Account?</h1>
                    <p>Enter your personal details <br/>to start the journey with us</p>
                    <Button as="a" variant="default" className="signup-btn" onClick={handleSignupClick}>SIGN UP</Button>

                </div>
            </div>
        </div>
    );
}

// export default Signin;