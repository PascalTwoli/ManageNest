import { IoMdAddCircleOutline } from "react-icons/io";

const TenantOverview = () => {
    return (
        <div>
            <div>
                <h3>Tenants</h3>
            </div>
            <div className="d-flex">
                <h6>Tenants overview</h6>
                <div>
                    <IoMdAddCircleOutline/>
                    <button>Add Tenant</button>
                </div>
            </div>
            <div></div>
        </div>
    );
}