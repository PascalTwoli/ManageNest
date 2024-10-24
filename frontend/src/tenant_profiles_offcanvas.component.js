import Offcanvas from 'react-bootstrap/Offcanvas';
import TenantProfileDetails from './tenant_profile_details.component';


function TenantProfilesOffcanvas({ show, handleClose }) {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end" className='offCanvas'>
      <Offcanvas.Body className=''>
          <TenantProfileDetails />
      </Offcanvas.Body>
      <Offcanvas.Header closeButton className='btn btn-default'> 
      </Offcanvas.Header>
    </Offcanvas>
  );
}

export default TenantProfilesOffcanvas;