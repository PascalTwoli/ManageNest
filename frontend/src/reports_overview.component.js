import { Table  } from "react-bootstrap";
import { useEffect, useState } from "react";

const ReportsOverview = () => {

    // const [activeItem, setActiveItem] = useState();

    //State to store table data (array of rows)
    const [tableData, setTableData] = useState ([]);

    useEffect (() => {
        const storedData = JSON.parse(localStorage.getItem('tenantFormData')) || [];
        if (storedData) {setTableData(storedData);}
    },[])

    function getDate () {
        const today = new Date();
        const month =today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${date}/${month}/${year}`

    }
    
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
                {tableData.length > 0 ? (
                    tableData.map((row, index) => (                        
                        <tr key={index}>                                                        
                            <td>{row.tenantFirstName +
                                    " " +
                                    row.tenantLastName}</td>
                            <td className="td-center"> 
                                <td>{getDate()}</td>
                                <td> Cash</td>
                                <td>sqwjj43jds</td>
                                <td>{row.monthlyRent}</td>
                            </td>   
                            <td> 48000</td>
                            <td> Delete</td>
                        </tr>
                    ))
                ):(
                    <tr>
                        <td colSpan="6" className="text-center">
                            No transactions found.
                        </td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    );
}

export default ReportsOverview;