import { Table } from "react-bootstrap";
import photos from './photos.jpg'
import { BsThreeDots } from "react-icons/bs";
import { useEffect, useState } from "react";
import TenantMoreDetailsOffcanvas from "./tenant_profiles_offcanvas.component";

const TenantOverviewTable = () => {

    //state to control how TenantMoreDetailsOffcanvas visibility;
    const [showOffcanvas, setShowOffcanvas]  = useState(false);
      // State to store table data (array of rows)
    const [tableData, setTableData] = useState([]);

    const handleShow = () => setShowOffcanvas(true);
    const handleClose = () => setShowOffcanvas(false);

    //fetch data from the localStorage when the component mounts
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('tenantFormData')) || []; //parsing the json string back to an object
        if (storedData) {
            setTableData(storedData) 
        }

    }, []);


 return (
    <div>
        <Table  borderless hover>
            <thead>
                <tr>
                    <th>Tenant Name</th>
                    <th>Block Name</th>
                    <th>Unit Name</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th className="th-action">Action</th>
                </tr>
            </thead>

            <tbody>
                {tableData.length > 0 ? (
                    tableData.map((row, index) => (
                        <tr key={index}>
                        <td className="d-flex ">
                            <div className="image">
                                <img src={photos}/>
                            </div>
                            <div>
                                <p className="name">{row.tenantFirstName +" " + row.tenantLastName}</p>
                                <span>{row.tenantNationalId}</span>
                            </div>  
                        </td>
                        <td>{row.tenantBlockName}</td>
                        <td>{row.tenantUnitName}</td>
                        <td>{row.monthlyRent }</td>
                        <td>
                            <div className="status-div">Paid</div>
                        </td>
                        <td>
                            <div className="actionbutton d-flex">
                                <span className="">Delete</span>
                                <span className="span2"></span>
                                <span onClick={handleShow}><BsThreeDots /></span>
                            </div>
                            {/* rendering the offcanvas */}
                            <TenantMoreDetailsOffcanvas show={showOffcanvas} handleClose={handleClose} />
                        </td>
                    </tr>
                    ))
                ): (
                    <tr>
                    <td colSpan="6" className="text-center">
                      No data submitted yet.
                    </td>
                  </tr>
                )}
            </tbody>
        </Table>
    </div>
 );
}

export default TenantOverviewTable;