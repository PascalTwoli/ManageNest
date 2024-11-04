import { Table, Dropdown, DropdownButton } from "react-bootstrap";
import photos from "./photos.jpg";
import { BsThreeDots } from "react-icons/bs";
import { useEffect, useState } from "react";
import TenantProfilesOffcanvas from "./tenant_profiles_offcanvas.component";
import { supabase } from "./helper/supabaseClient";
import {
	fetchTenants,
	deleteTenant,
	updateTenant,
} from "./services/tenantService";

import { Alert } from "react-bootstrap";

//  generating a character unique code
const generateUniqueCode = () => {
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	let code = "";
	for (let i = 0; i < 7; i++) {
		code += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return code;
};

const TenantOverviewTable = () => {
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
		setInterval(() => {
			const loadTenants = async () => {
				setLoading(true);
				const data = await fetchTenants();
				setTenants(data || []); // set tenants to data or an empty array if fetch fails
				setLoading(false);
			};
	
			loadTenants();
		}, 1000
		);
	}, []);

	// State to store table data (array of rows)
	//  const [tenants, setTenants] = useState(JSON.parse(localStorage.getItem("tenantFormData")) || []);

	const handleShow = (itemToShow, itemIndex) => {
		setActiveItem(() => itemToShow);
		setActiveItemIndex(() => itemIndex);
		setShowOffcanvas(true);
	};

	const handleClose = () => setShowOffcanvas(false);

	//fetch data from the localStorage when the component mounts
	//   useEffect(() => {
	// 	setInterval( () => {
	// 		const storedData = JSON.parse(localStorage.getItem("tenantFormData")) || []; //parsing the json string back to an object
	// 		if (storedData) {
	// 			settenants(storedData);
	// 		}
	// 	}, 1000);
	//   }, []);

	//updatig tenant data__*
	const handleTenantUpdate = async (updatedData) => {
		// console.log("Here now", updatedData, activeItemIndex)

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
			// console.log("saved status: ", tenant)
			// console.log("Tenant data updated successfully in Supabase");
			alert("Tenant data updated successfully in Supabase");
		} catch (error) {
			// console.error("Error updating tenant data:", error.message);
			alert("Error updating tenant data:", error.message);
		}
		// await updateTenant(updatedData);
		// localStorage.setItem("tenantFormData", JSON.stringify(updatedData)); // ssave updated data to localStorage
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
			} else {
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
	if (loading) return <p>Loading...</p>;
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
									{/* <DropdownButton
						as="a"
						size="sm"
						className="status-btn"
						title={row.paymentStatus}
						variant={row.paymentStatus === 'Paid' ? 'default': 'green'}
						onSelect={(status) => handleStatusChange(index, status)}
					>
						<Dropdown.Item eventKey="Paid" className="paid-status">Paid</Dropdown.Item>
						<Dropdown.Item eventKey="Due" className="due-status">Due</Dropdown.Item>
					</DropdownButton> */}
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
