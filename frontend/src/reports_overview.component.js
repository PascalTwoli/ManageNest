import { Table, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { fetchPayments, fetchTenants } from "./services/tenantService";
import PaymentsOffcanvas from "./payments_offcanvas.component";
import { supabase } from "./helper/supabaseClient";

const ReportsOverview = ({tenantId}) => {
    const [showOffcanvas, setShowOffcanvas] = useState (false);

    const [loading, setLoading] = useState();

    //State to store table data (array of rows)
    const [tenantData, setTenantData] = useState ([]);
    const [payments, setPayments] = useState ([]);

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
    },[])

    useEffect (() => {
        const loadPayments = async () => {
            setLoading (true);
            const data = await fetchPayments(tenantId)
            setPayments (data || []);
            setLoading(false);
            console.log("payment data include: ",  tenantId)
        }
        
        loadPayments();
    }, []); // fetch payments whenever tenantId changes

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
                            {payments.length > 0 ? (
                                payments.map((pay_row, pay_index) => (
                                    <td className="td-center d-flex" key={pay_index}> 
                                        <span>{getDate()}</span>
                                        <span>{pay_row.paymentMethod}</span>
                                        <span>{pay_row.transactionRef}</span>
                                        <span>{pay_row.rentAmount}</span>
                                    </td>
                                ))
                            ): (
                            <tr>
                                 <td colSpan="6" className="text-center">
                                     No payment details found.
                                 </td>
                             </tr>
                            )}
             
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