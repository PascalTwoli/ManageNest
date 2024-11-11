import { Table, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { fetchTenants } from "./services/tenantService";
import PaymentsOffcanvas from "./payments_offcanvas.component";

const ReportsOverview = () => {
    const [showOffcanvas, setShowOffcanvas] = useState (false);

    const [loading, setLoading] = useState();

    //State to store table data (array of rows)
    const [tenantData, setTenantData] = useState ([]);

    const handleShow = () => setShowOffcanvas(true);
    const handleClose = () => setShowOffcanvas(false);

    useEffect (() => {
        const loadReports = async () => {
            setLoading (true)
            const data = await fetchTenants();
            setTenantData(data || []);
            setLoading(false)
        }

        loadReports();
        // const storedData = JSON.parse(localStorage.getItem('tenantFormData')) || [];
        // if (storedData) {setTenantData(storedData);}
    },[])

    function getDate () {
        const today = new Date();
        const month =today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${date}/${month}/${year}`;

    }
    

    if (loading) return (
		<Spinner animation="border" role="status">
			<span className="visually-hidden">Loading...</span>
	  </Spinner>
	);
    
    return (
        <div>
            <div>
                <h4>Payment reports</h4>
            </div>

            <Table>
                <thead className="thead">
                    <tr>
                        <th>Name</th>
                        <th className="th-center">
                            Transactions
                        </th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="t-body">
                {tenantData.length > 0 ? (
                    tenantData.map((row, index) => (                        
                        <tr key={index}>                                                        
                            <td>{row.tenantFirstName +
                                    " " +
                                    row.tenantLastName}</td>
                            <td className="td-center d-flex"> 
                                <span>{getDate()}</span>
                                <span> Cash</span>
                                <span>sqwjj43jds</span>
                                <span>{row.monthlyRent}</span>
                            </td>   
                            <td> 48000</td>
                            <td className="payment-btn" onClick={handleShow} >
                                Make payment
                            </td>
                            <PaymentsOffcanvas show={showOffcanvas} handleClose={handleClose}/>
                        </tr>
                    ))
                ):(
                    <tr>
                        <td colSpan="6" className="text-center">
                            No payment details found.
                        </td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    );
}


export default ReportsOverview;