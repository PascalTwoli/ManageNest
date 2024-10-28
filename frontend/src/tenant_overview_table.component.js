import { Table, Dropdown, DropdownButton } from "react-bootstrap";
import photos from "./photos.jpg";
import { BsThreeDots } from "react-icons/bs";
import { useEffect, useState } from "react";
import TenantMoreDetailsOffcanvas from "./tenant_profiles_offcanvas.component";

import { Alert } from "react-bootstrap";

const TenantOverviewTable = () => {
	const [activeItem, setActiveItem] = useState();

	//state to control how TenantMoreDetailsOffcanvas visibility;
	const [showOffcanvas, setShowOffcanvas] = useState(false);
	// State to store table data (array of rows)
	const [tableData, setTableData] = useState([]);

	const handleShow = (itemToShow) => {
		setActiveItem(() => itemToShow);
		setShowOffcanvas(true);
	};
	const handleClose = () => setShowOffcanvas(false);

	//fetch data from the localStorage when the component mounts
	useEffect(() => {
		const storedData =
			JSON.parse(localStorage.getItem("tenantFormData")) || []; //parsing the json string back to an object
		if (storedData) {
			setTableData(storedData);
		}
	}, []);

	// Update payment status
	const handleStatusChange = (index, status) => {
		const updatedData = [...tableData];
		updatedData[index].paymentStatus = status;
		setTableData(updatedData);
		localStorage.setItem("tableData", JSON.stringify(updatedData)); // Save updated data to localStorage
	};

	const handleDelete = (index) => {
		const updatedData = tableData.filter((_, i) => i !== index); //removing the selected row by index;

		//update both the localstorage and the state
		setTableData(updatedData);
		localStorage.setItem("tenantFormData", JSON.stringify(updatedData));

		alert("You are about to delete a tenant from your records");
	};

	// Update total rent in localStorage whenever tableData changes
	useEffect(() => {
		const totalRent = tableData.reduce(
			(sum, row) => sum + (parseFloat(row.monthlyRent) || 0),
			0
		);
		localStorage.setItem("totalRent", totalRent); // Save totalRent to localStorage

		const tenantCount = tableData.length;
		localStorage.setItem("tenantCount", tenantCount);
	}, [tableData]); //not working

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
					{tableData.length > 0 ? (
						tableData.map((row, index) => (
							<tr key={index}>
								<td className="d-flex ">
									{/* <div className="image">
										<img src={photos} />
									</div> */}
										<p className="name">
											{row.tenantFirstName +
												" " +
												row.tenantLastName}
										</p>
										{/* <span>{row.tenantNationalId}</span> */}
								</td>
								<td>
									{row.tenantBlockName}	
								</td>
								<td>
									{row.tenantUnitName}	
								</td>
								<td>
									{row.monthlyRent}	
								</td>
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
															: "brown",
													cursor: "pointer",
													fontSize: "17px"
												}}>
												{row.paymentStatus}
											</Dropdown.Toggle>
											<Dropdown.Menu>
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
											onClick={() => handleDelete(index)}>
											Delete
										</span>
										<span className="span2"></span>
										<span onClick={() => handleShow(row)}>
											<BsThreeDots />
										</span>
									</div>
									{/* rendering the offcanvas */}
									<TenantMoreDetailsOffcanvas
										show={showOffcanvas}
										handleClose={handleClose}
										tenantProfileData={activeItem}
									/>
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
