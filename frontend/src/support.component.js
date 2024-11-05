import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';


const SupportForManageNest = () => {
    
    return (
        <div>
            <div>
                <h4>Support page</h4>
                <h6>Looking for support? We got you covered!</h6>
            </div>

            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Frequently asked question</Accordion.Header>
                    <Accordion.Body>
                        <p>How do I add a new tenant?</p>
                        <p>How can I update rent details?</p>
                        <p>How do I enable or disable notifications?</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>User Guide / Documentation</Accordion.Header>
                    <Accordion.Body>
                        <a href="https://pascaltwoli.github.io/docs.managenest/">Navigate to documentation for ManageNest sytem</a>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );
}

export default SupportForManageNest;