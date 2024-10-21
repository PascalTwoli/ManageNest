import { Table } from "react-bootstrap";
import photos from './photos.jpg'
import { BsThreeDots } from "react-icons/bs";

const TenantOverviewTable = () => {
 return (
    <div>
        <Table  borderless hover>
            <thead>
                <tr>
                    <th>Tenant Name</th>
                    <th>Block Name</th>
                    <th>House Number</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th className="th-action">Action</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td className="d-flex ">
                        <div className="image">
                            <img src={photos}/>
                        </div>
                        <div>
                            <span className="name">Pascal Twoli</span><br></br>
                            <span>10116009</span>
                        </div>  
                    </td>
                    <td> Mideya C</td>
                    <td>1004</td>
                    <td>100000</td>
                    <td>
                        <div className="status-div">Paid</div>
                    </td>
                    <td>
                        <div className="actionbutton d-flex">
                            <span className="">Delete</span>
                            <span className="span2"></span>
                            <span><BsThreeDots /></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="d-flex ">
                        <div className="image">
                            <img src={photos}/>
                        </div>
                        <div>
                            <span className="name ">Pascal Twoli</span><br/>
                            <span>10116009</span>
                        </div>  
                    </td>
                    <td> Mideya C</td>
                    <td>1004</td>
                    <td>100000</td>
                    <td>
                        <div className="status-div ">Paid</div>
                    </td>
                    <td className="td-action">
                        <div className="actionbutton d-flex">
                            <span className="">Delete</span>
                            <span className="span2"></span>
                            <span><BsThreeDots /></span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </Table>
    </div>
 );
}

export default TenantOverviewTable;