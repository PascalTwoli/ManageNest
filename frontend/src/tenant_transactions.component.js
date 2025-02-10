
import { Table, Offcanvas, Spinner } from "react-bootstrap";
import { format,  compareAsc} from 'date-fns';
import { supabase } from "./helper/supabaseClient";

function TenantTransactions({ show, handleClose,loading, transactions, error, tenant }) {




    return (
        <Offcanvas
            show={show}
            onHide={handleClose}
            placement="end"
            className="transactions-offCanvas offcanvas ">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Transactions for {tenant.tenantFirstName}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {loading && (
                    <Spinner animation="border" role="status" className="spinner">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )}

                {error ? (
                    <p>{error}</p>
                ) : transactions.length > 0 ? (
                    <Table
                    
                     hover
                     >
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Payment method</th>
                                <th>Transaction Ref</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction, index) => (
                                <tr key={index}>
                                    <td>{format(new Date(transaction.created_at), "dd/MM/yyyy") || "N/A"}</td>
                                    <td>{transaction.rentAmount || "0"}</td>
                                    <td>{transaction.paymentMethod || "N/A"}</td>
                                    <td>{transaction.transactionRef || "N/A"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <p>No transactions found for this tenant.</p>
                )}
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default TenantTransactions;