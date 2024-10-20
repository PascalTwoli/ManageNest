import { Button, ButtonGroup, Dropdown, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from './logo.jpeg';
import Signin from './signin.component';

// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);


export default function Signup() {

  const navigate = useNavigate();
  
  const handleSigninClick = () => {
    navigate('/signin');
  }

 return(
    <div className="container container1">
        <div className="row d-flex">
            <div className="col-md-5 bg-primary left-bar">
                <div className="logo-div">
                    <img src={logo} alt="" className="logo"/>
                </div>
                <div className="d-flex left-div-cnter">
                    <h1 className="">Have An Account?</h1>
                    <p> To keep connected with us please <br/>login with your personal details </p>
                    <Button as="a" variant="default" className="signup-btn" onClick={handleSigninClick}>SIGN IN</Button>
                </div>
            </div>
            <div className="col-md-6 d-flex">
                <div className="class-for-form-signup">
                    <h1 className="text-primary sign-in-h1">Create an Account</h1>
                    <p className="text-default text-1">or use your e-mail account</p>
                    
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label as="p" variant="text-primary" className="form-label text-primary">Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" className="form-input" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label as="p" variant="text-primary" className="form-label text-primary">Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" className="form-input" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label as="p" variant="primary" className="form-label text-primary">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" className="form-input" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" className="text-primary"/>
                        </Form.Group>
                        <Button variant="primary" className="submit-btn" type="submit">
                            Sign up
                        </Button> <br /> <br />
                    </Form>
                </div>
            </div>
        </div>
    </div>
 );
}

