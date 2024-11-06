import Accordion from 'react-bootstrap/Accordion';
import { ContactForm } from './support/contactform';
import image from './image.png'
const SupportForManageNest = () => {
    
    return (
        <div className=''>
            <div>
                <h5>Support page</h5>
                <h6>Looking for support? We got you covered!</h6>
            </div>

            <div className='d-flex'>
                <div className='s-div1'>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h6>Frequently asked question</h6></Accordion.Header>
                        <Accordion.Body>
                            <p>How do I add a new tenant?</p>
                            <p>How can I update rent details?</p>
                            <p>How do I enable or disable notifications?</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header> <h6>User Guide / Documentation</h6></Accordion.Header>
                        <Accordion.Body>
                        <p>Navigate to <a href="https://pascaltwoli.github.io/docs.managenest/">documentation</a> for ManageNest sytem</p> 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><h6>Contact support</h6></Accordion.Header>
                        <Accordion.Body>
                        <ContactForm></ContactForm>
                            <h6>Contact us</h6>
                            <div className='contactus-div row'>
                                <div className='col-6'>
                                    <p>Phone number</p>
                                    <span>0792000200</span>
                                </div>
                                <div className='col-6'>
                                    <p>Email</p>
                                    <span>support@managenest.co.ke</span>
                                </div>
                        </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header> <h6>Product Updates and Announcements</h6></Accordion.Header>
                        <Accordion.Body>
                            <p>Updates about new features, system improvements, or planned maintenance, will be updated here to  <br/> keep user informed about changes that may affect them.</p> 
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
                <div className='person1-div'>
                    <img src={image} alt='image'/>
                </div>
            </div>
        </div>
    );
}

export default SupportForManageNest;