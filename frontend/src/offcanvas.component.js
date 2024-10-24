import Offcanvas from 'react-bootstrap/Offcanvas';
import TenantForm from './tenantform.component';

function OffCanvasModal({ show, handleClose }) {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end" className='offCanvas'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Tenant details</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className=''>
        <TenantForm/>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OffCanvasModal;