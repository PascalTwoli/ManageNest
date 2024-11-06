import OffCanvasModal from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import { handleSignOut } from './services/adminServices';

function ProfileCard( {show, handleClose}) {
    const navigate = useNavigate()

    const handleLogout = async () => {
        await handleSignOut();
        navigate("/signin")
      };

  return (

    <>  
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <h6>Account type</h6>
                <p>Admin Account</p>
        
            </div>
            
            <div>
                <h6>Profile</h6>
                <p>Account settings</p>
                <p onClick={handleLogout}>Sign out</p>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </> 
    

  );
}

export default ProfileCard;