import Offcanvas from 'react-bootstrap/Offcanvas';
import TenantProfileDetails from './tenant_profile_details.component';


function TenantProfilesOffcanvas({ show, handleClose, tenantProfileData }) {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end" className='profiles_offCanvas'>
      <Offcanvas.Body className=''>
          <TenantProfileDetails tenantProfileData={tenantProfileData}/>
      </Offcanvas.Body>
      <Offcanvas.Header closeButton className='btn btn-default'> 
      </Offcanvas.Header>
    </Offcanvas>
  );
}

export default TenantProfilesOffcanvas;