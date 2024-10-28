import { IoMdAddCircleOutline, IoIosPeople, IoMdPerson } from "react-icons/io";
import { MdAttachMoney, MdOutlinePerson } from "react-icons/md";
import { useEffect, useState } from "react";
import OffCanvasModal from "./offcanvas.component";
import TenantOverviewTable from "./tenant_overview_table.component";

const TenantOverviewHeader = () => {
	// State controlling the offcanvas visibility
	const [showOffcanvas, setShowOffcanvas] = useState(false);
	//total Rent
	const [totalRent, setTotalRent] = useState(0);
    const [tenantCount, setTenantCount] = useState(0);

	const handleShow = () => setShowOffcanvas(true);
	const handleClose = () => setShowOffcanvas(false);

	useEffect(() => {
        setInterval(() => {
            const storedTotalRent = localStorage.getItem("totalRent") || 0;
            setTotalRent(() => parseFloat(storedTotalRent));

            const storedTenantCount = localStorage.getItem('tenantCount') || 0;
            setTenantCount(() => parseInt(storedTenantCount));
        }, 1000);
	}, []);

	return (
		<div className="TenantOverviewHeader">
			<div>
				<h4>Tenants</h4>
			</div>
			<div className="d-flex tenant_overview_head1">
				<h6>Tenants overview</h6>
				<div
					className="btn btn-primary add-tenant-btn d-flex"
					onClick={handleShow}>
					<IoMdAddCircleOutline />
					<span className="">Add Tenant</span>
				</div>
				{/* rendering the offcanvas */}
				<OffCanvasModal show={showOffcanvas} handleClose={handleClose} />
			</div>
			{/* container for the totals */}
			<div className="d-flex totals-div">
				<div className="d-flex totals1">
					<div className="text-primary">
						<IoIosPeople size={28} />
					</div>
					<div>
						<span>{tenantCount}</span>
						<p className="p1">Total Tenants</p>
					</div>
				</div>
				<div className="d-flex totals1">
					<div className="text-success">
						<MdAttachMoney size={28} />
					</div>
					<div>
						<span>Ksh {totalRent}</span>
						<p className="p1">Total Amount collected</p>
					</div>
				</div>
				<div className="d-flex totals1">
					<div className="text-danger">
						<MdOutlinePerson size={28} />
					</div>
					<div>
						<span>10</span>
						<p className="p1">Renewal Tenants</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TenantOverviewHeader;
