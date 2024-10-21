import { IoMdAddCircleOutline, IoIosPeople, IoMdPerson } from "react-icons/io";
import { MdAttachMoney, MdOutlinePerson } from "react-icons/md";

const TenantOverviewHeader = () => {
    return (
        <div className="TenantOverviewHeader">
            <div>
                <h4>Tenants</h4>
            </div>
            <div className="d-flex tenant_overview_head1">
                <h6>Tenants overview</h6>
                <div className="btn btn-primary add-tenant-btn d-flex">
                    <IoMdAddCircleOutline/>
                    <span className="">Add Tenant</span>
                </div>
            </div>
            {/* container for the totals */}
            <div className="d-flex totals-div">
                <div className="d-flex totals1">
                    <div className="text-primary">
                        <IoIosPeople size={28}/>
                    </div>
                    <div>
                        <span>120</span>
                        <p className="p1">Total Tenants</p>
                    </div>
                </div>
                <div className="d-flex totals1">
                    <div className="text-success">
                        <MdAttachMoney size={28}/>
                    </div>
                    <div>
                        <span>Ksh 124500</span>
                        <p className="p1">Total Amount collected</p>
                    </div>
                </div>
                <div className="d-flex totals1">
                    <div className="text-danger">
                        <MdOutlinePerson size={28}/>
                    </div>
                    <div>
                        <span>342</span>
                        <p className="p1">Renewal Tenants</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TenantOverviewHeader;
