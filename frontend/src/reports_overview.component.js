import { Table  } from "react-bootstrap";
import { useEffect, useState } from "react";
import { fetchTenants } from "./services/tenantService";

const ReportsOverview = () => {

    const [loading, setLoading] = useState();

    //State to store table data (array of rows)
    const [tenantData, setTenantData] = useState ([]);

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
    

    if (loading) return <p>Loading reports...</p>
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
                            <td> Delete</td>
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