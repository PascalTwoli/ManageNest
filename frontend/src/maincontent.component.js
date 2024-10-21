import Sidebar from './Sidebar.component';



const Maincontent = () => {


  return (
    <div className={`d-flex`}>
      {/* Sidebar */}
      <Sidebar/>
      {/* Main Content */}
      <div className="flex-grow-1 p-3">
        <h1>this is the main content area</h1>
      </div>
    </div>
  );
};

export default Maincontent;