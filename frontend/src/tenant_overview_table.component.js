import { Table, Dropdown, Spinner } from "react-bootstrap";
import photos from "./photos.jpg";
import { BsThreeDots } from "react-icons/bs";
import { useEffect, useState } from "react";
import TenantProfilesOffcanvas from "./tenant_profiles_offcanvas.component";
import {
	fetchTenants,
	deleteTenant,
	updateTenant,
} from "./services/tenantService";


//  generating a character unique code
const generateUniqueCode = () => {
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	let code = "";
	for (let i = 0; i < 7; i++) {
		code += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return code;
};

const TenantOverviewTable = ({onSelectTenant}) => {
	const [activeItem, setActiveItem] = useState();
	const [activeItemIndex, setActiveItemIndex] = useState();

	//state to control how TenantMoreDetailsOffcanvas visibility;
	const [showOffcanvas, setShowOffcanvas] = useState(false);

	//working with the dataBase------*******
	const [tenants, setTenants] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	//fetch tanant data from supabase
	useEffect(() => {
			const loadTenants = async () => {
				setLoading(true);
				const data = await fetchTenants();
				setTenants(data || []); // set tenants to data or an empty array if fetch fails
				setLoading(false);
			};
	
			loadTenants();
	}, []);

	const handleShow = (itemToShow, itemIndex) => {
		setActiveItem(() => itemToShow);
		setActiveItemIndex(() => itemIndex);
		setShowOffcanvas(true);
		onSelectTenant(() => itemToShow.tenantId) //notify Maincontent of the selected tenant ID
		console.log("here the tenant id is: ", itemToShow.tenantId );
	};
	
	const handleClose = () => setShowOffcanvas(false);

	//updatig tenant data__*
	const handleTenantUpdate = async (updatedData) => {

		tenants[activeItemIndex] = { ...activeItem, ...updatedData };

		setTenants(() => updatedData); //chnange "tenants"

		try {
			const tenant = updatedData;
			await updateTenant(tenant.tenantId, updatedData);
			alert("you have successfully updated the tenant");
		} catch (error) {
			console.log("Error occured while updating the tenant");
			alert("Error occured while updating the tenant");
		}

		// localStorage.setItem('tenantFormData', JSON.stringify(tenants))
	};

	// update payment status and save the unique code to localStorage
	const handleStatusChange = async (index, status) => {
		const updatedData = [...tenants];
		updatedData[index].paymentStatus = status;

		//only generate and assign a unique code if status is "Paid" and no unique code exists
		if (status === "Paid" && !updatedData[index].uniqueCode) {
			const uniqueCode = generateUniqueCode();
			updatedData[index].uniqueCode = uniqueCode;
			console.log("this is my unique code: ", uniqueCode)
			alert(
				`A unique code --${uniqueCode}-- has been generated to show a cleared payment by ${updatedData[index].tenantFirstName} ${updatedData[index].tenantLastName}`
			);
		} else {
			const uniqueCode = "";
			updatedData[index].uniqueCode = uniqueCode;
		}
		// Update the state
		setTenants(() => updatedData);

		// Save updated data to Supabase
		try {
			const tenant = updatedData[index];
			await updateTenant(tenant.tenantId, {
				paymentStatus: tenant.paymentStatus,
				uniqueCode: tenant.uniqueCode,
			});
			alert("Tenant data updated successfully in Supabase");
		} catch (error) {
			alert("Error updating tenant data:", error.message);
		}
	};

	const handleDelete = async (tenantId) => {
		const confirmed = window.confirm(
			"Are you sure you want to delete this tenant?"
		);
		if (confirmed) {
			const result = await deleteTenant(tenantId);
			if (result) {
				// update tenants list by filtering out the deleted tenant
				setTenants((prevTenants) =>
					prevTenants.filter((tenant) => tenant.tenantId !== tenantId)
				);
				alert("Tenant deleted successfully");
			}
			else {
				alert("Failed to delete tenant");
			}
		}

	};

	// update total rent in localStorage whenever tenants changes
	useEffect(() => {
		const totalRent = tenants.reduce(
			(sum, row) => sum + (parseFloat(row.monthlyRent) || 0),
			0
		);
		localStorage.setItem("totalRent", totalRent); // Save totalRent to localStorage

		const tenantCount = tenants.length;
		localStorage.setItem("tenantCount", tenantCount);
	}, [tenants]); //not working

	// render loading, error, or table data
	if (loading) return (
		<Spinner animation="border" role="status">
			<span className="visually-hidden">Loading...</span>
	  </Spinner>
	);
	if (error) return <p>{error}</p>;

	return (
		<div>
			<Table borderless hover>
				<thead>
					<tr>
						<th>Tenant Name</th>
						<th>Block Name</th>
						<th>Unit Name</th>
						<th>Amount</th>
						<th>Status</th>
						<th className="th-action">Action</th>
					</tr>
				</thead>

				<tbody>
					{tenants.length > 0 ? (
						tenants.map((row, index) => (
							<tr key={index}>
								<td className="d-flex ">
									{/* <div className="image">
										<img src={photos} />
									</div> */}
									<p className="name">
										{row.tenantFirstName + " " + row.tenantLastName}
									</p>
									{/* <span>{row.tenantNationalId}</span> */}
								</td>
								<td>{row.tenantBlockName}</td>
								<td>{row.tenantUnitName}</td>
								<td>{row.monthlyRent}</td>
								<td>
									<Dropdown
										onSelect={(status) =>
											handleStatusChange(index, status)
										}>
										<Dropdown.Toggle
											className="status-btn"
											as="p"
											size="sm"
											style={{
												color:
													row.paymentStatus === "Paid"
														? "green"
														: "Due"
														? "brown"
														: "Null"
														? "grey"
														: "blue",
												cursor: "pointer",
												fontSize: "14px",
											}}>
											{row.paymentStatus}
										</Dropdown.Toggle>
										<Dropdown.Menu>
											<Dropdown.Item eventKey="Due">
												---
											</Dropdown.Item>
											<Dropdown.Item eventKey="Paid">
												Paid
											</Dropdown.Item>
											<Dropdown.Item eventKey="Due">
												Due
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</td>
								<td>
									<div className="actionbutton d-flex">
										<span
											className=""
											style={{ cursor: "pointer" }}
											onClick={() => handleDelete(row.tenantId)}>
											Delete
										</span>
										<span className="span2"></span>
										<span
											style={{ cursor: "pointer" }}
											onClick={() => handleShow(row, index)}>
											<BsThreeDots />
										</span>
									</div>
									{/* rendering the offcanvas */}

									{activeItem && (
										<TenantProfilesOffcanvas
											show={showOffcanvas}
											handleClose={handleClose}
											tenantProfileData={activeItem}
											onTenantUpdate={handleTenantUpdate}
										/>
									)}
								</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan="6" className="text-center">
								No data submitted yet.
							</td>
						</tr>
					)}
				</tbody>
			</Table>
		</div>
	);
};

export default TenantOverviewTable;