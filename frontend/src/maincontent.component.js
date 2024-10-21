import Sidebar from './Sidebar.component';
import TenantOverview from './tenant_overview.component';



const Maincontent = () => {


  return (
    <div className={`d-flex`}>
      {/* Sidebar */}
      <Sidebar/>
      {/* Main Content */}
      <div className="flex-grow-1 p-3 main-content-container">
        <TenantOverview/>
      </div>
    </div>
  );
};

export default Maincontent;