import React, { useState } from "react";
import Sidebar from "./sidebar.component";
import TenantOverview from "./tenant_overview.component";
import LeaseOverview from "./lease_overview.component";
import ReportsOverview from "./reports_overview.component";
import ManageSettings from "./settings.component";
import SupportForManageNest from "./support.component";
import logo from './logo.jpeg'
// import Footer from "react-bootstrap"

const Maincontent = () => {
	// track  the component to be shown in the maincontent;
	const [activeComponent, setActiveComponent] = useState("tenant"); // default to 'tenant'

	//function to handle component selection
	const handleSelectComponent = (component) => {
		setActiveComponent(component);
	};

	return (
		<div>
			<div className="d-flex mainContentContainer">
				{/* Sidebar */}
				<Sidebar onSelectComponent={handleSelectComponent} />
				{/* Main Content */}
				<div className="flex-grow-1 p-3 main-content-container">
					{activeComponent === "tenant" && <TenantOverview />}
					{activeComponent === "reports" && <ReportsOverview />}
					{activeComponent === "lease" && <LeaseOverview />}
					{activeComponent === "settings" && <ManageSettings />}
					{activeComponent === "support" && <SupportForManageNest />}
				</div>
			</div>
			<footer className="footer">
				<span><img src={logo}/></span>
				<span> &copy; 2024 Property Management Inc.</span>
			</footer>
		</div>

	);
};

export default Maincontent;
