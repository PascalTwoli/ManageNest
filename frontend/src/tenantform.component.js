import { Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";

const TenantForm = () => {
	//function to switch from the signup component to signin component
	// const navigate = useNavigate();
	// const handleSigninClick = () => {
	// 	navigate("/signin");
	// };

	// submitting the form to the server
	const [formData, setFormData] = useState({
		tenantId: "",
		//tenant info
		tenantFirstName: "",
		tenantLastName: "",
		tenantPhoneNumber: "",
		tenantEmail: "",
		tenantNationalId: "",
		tenantOccupation: "",
		tenantBlockName: "",
		tenantUnitName: "",
		tenantMoveInDate: "",
		//lease info
		securityDeposit: "",
		monthlyRent: "",
		paymentStatus: "Paid",
		prevMonthRent: "",
		leaseStartDate: "",
		leaseEndDate: "",
		leaseStatus: "",
		propertyAddress: "",
		residenceType: "",
		bedroomNumber: "",
		bathroomNumber: "",
		additionalTerms: "",
	});

	// const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	//handle form input change
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((preveData) => ({
			...preveData,
			[name]: value,
		}));
	};

	//handle form submit
	const handleSubmit = async (e) => {
		// e.preventDefault();

		try {
			// fetch existing data from localStorage
			const storedData =
				JSON.parse(localStorage.getItem("tenantFormData")) || [];
			
			const nextID = `${storedData.length + 1}`;

			// add the new formData to the stored data(array)
			const updatedData = [...storedData, { ...formData, tenantId: nextID }];

			//save the updated array back to the localstorage
			localStorage.setItem("tenantFormData", JSON.stringify(updatedData));

			//clear the form after submission
			setFormData({
				tenantFirstName: "",
				tenantLastName: "",
				tenantPhoneNumber: "",
				tenantEmail: "",
				tenantNationalId: "",
				tenantOccupation: "",
				tenantBlockName: "",
				tenantUnitName: "",
				tenantMoveInDate: "",

				securityDeposit: "",
				monthlyRent: "",
				prevMonthRent: "",
				leaseStartDate: "",
				leaseEndDate: "",
				leaseStatus: "",
				propertyAddress: "",
				residenceType: "",
				bedroomNumber: "",
				bathroomNumber: "",
				additionalTerms: "",
			});

			// setSuccess(true);
			// setError(null);
			alert("Form data submitted!");
			console.log("Form data saved to local storage:", updatedData);
		} catch (error) {
			console.error("Error submitting the form: ", error);
			setError("Error submitting the form");
		}
	};

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				{error && <Alert variant="danger">{error}</Alert>}
				{success && (
					<Alert variant="success">Form submitted successfully!</Alert>
				)}
				{/* tenant information */}
				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label
						as="p"
						variant="text-primary"
						className="form-label text-primary">
						First name
					</Form.Label>
					<Form.Control
						type="text"
						name="tenantFirstName"
						value={formData.tenantFirstName}
						onChange={handleInputChange}
						placeholder="Enter the first name"
						className="form-input"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label
						as="p"
						variant="primary"
						className="form-label text-primary">
						Last name
					</Form.Label>
					<Form.Control
						type="text"
						name="tenantLastName"
						value={formData.tenantLastName}
						onChange={handleInputChange}
						placeholder="Last name"
						className="form-input"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPhonenumber">
					<Form.Label
						as="p"
						variant="primary"
						className="form-label text-primary">
						Phone number
					</Form.Label>
					<Form.Control
						type="number"
						name="tenantPhoneNumber"
						value={formData.tenantPhoneNumber}
						onChange={handleInputChange}
						placeholder="Phone number"
						className="form-input"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label
						as="p"
						variant="primary"
						className="form-label text-primary">
						Email
					</Form.Label>
					<Form.Control
						type="email"
						name="tenantEmail"
						value={formData.tenantEmail}
						onChange={handleInputChange}
						placeholder="Email"
						className="form-input"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicID">
					<Form.Label
						as="p"
						variant="primary"
						className="form-label text-primary">
						National Id
					</Form.Label>
					<Form.Control
						type="number"
						name="tenantNationalId"
						value={formData.tenantNationalId}
						onChange={handleInputChange}
						placeholder="National Id"
						className="form-input"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicOccupation">
					<Form.Label
						as="p"
						variant="primary"
						className="form-label text-primary">
						Occupation
					</Form.Label>
					<Form.Control
						type="text"
						name="tenantOccupation"
						value={formData.tenantOccupation}
						onChange={handleInputChange}
						placeholder="Occupation"
						className="form-input"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicBlockname">
					<Form.Label
						as="p"
						variant="primary"
						className="form-label text-primary">
						Block name
					</Form.Label>
					<Form.Control
						type="text"
						name="tenantBlockName"
						value={formData.tenantBlockName}
						onChange={handleInputChange}
						placeholder="Block name"
						className="form-input"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicUnitname">
					<Form.Label
						as="p"
						variant="primary"
						className="form-label text-primary">
						Unit name
					</Form.Label>
					<Form.Control
						type="text"
						name="tenantUnitName"
						value={formData.tenantUnitName}
						onChange={handleInputChange}
						placeholder="Unit name"
						className="form-input"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicDate">
					<Form.Label
						as="p"
						variant="primary"
						className="form-label text-primary">
						Move in date
					</Form.Label>
					<Form.Control
						type="date"
						name="tenantMoveInDate"
						value={formData.tenantMoveInDate}
						onChange={handleInputChange}
						placeholder="Move in date"
						className="form-input"
					/>
				</Form.Group>
				{/* lease information  */}
				<h6>Enter Lease Information</h6>
				<Form.Group className="mb-3" controlId="formBasicDeposit">
					<Form.Label
						as="p"
						variant="primary"
						className="form-label text-primary">
						Security Deposit
					</Form.Label>
					<Form.Control
						type="number"
						name="securityDeposit"
						value={formData.securityDeposit}
						onChange={handleInputChange}
						placeholder="e.g. 73200"
						className="form-input"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicRent">
					<Form.Label
						as="p"
						variant="primary"
						className="form-label text-primary">
						Monthly Rent
					</Form.Label>
					<Form.Control
						type="number"
						name="monthlyRent"
						value={formData.monthlyRent}
						onChange={handleInputChange}
						placeholder="e.g. 40400"
						className="form-input"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicRent">
					<Form.Label
						as="p"
						variant="primary"
						className="form-label text-primary">
						Previous Rent
					</Form.Label>
					<Form.Control
						type="number"
						name="prevMonthRent"
						value={formData.prevMonthRent}
						onChange={handleInputChange}
						placeholder="e.g. 40400"
						className="form-input"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicDate">
					<Form.Label
						as="p"
						variant="primary"
						className="form-label text-primary">
						Lease Start Date
					</Form.Label>
					<Form.Control
						type="date"
						name="leaseStartDate"
						value={formData.leaseStartDate}
						onChange={handleInputChange}
						placeholder="e.g. 12/10/2024"
						className="form-input"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicDate">
					<Form.Label
						as="p"
						variant="primary"
						className="form-label text-primary">
						Lease End Date
					</Form.Label>
					<Form.Control
						type="date"
						name="leaseEndDate"
						value={formData.leaseEndDate}
						onChange={handleInputChange}
						placeholder="e.g. 12/11/2024"
						className="form-input"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicLeaseStatus">
					<Form.Label
						as="p"
						variant="primary"
						className="form-label text-primary">
						Lease Status
					</Form.Label>
					<Form.Control
						type="text"
						name="leaseStatus"
						value={formData.leaseStatus}
						onChange={handleInputChange}
						placeholder="Active/Expired/Terminated"
						className="form-input"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label
						as="p"
						variant="primary"
						className="form-label text-primary">
						Property Address
					</Form.Label>
					<Form.Control
						type="text"
						name="propertyAddress"
						value={formData.propertyAddress}
						onChange={handleInputChange}
						placeholder="e.g. King Garden"
						className="form-input"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label
						as="p"
						variant="primary"
						className="form-label text-primary">
						Residence Type
					</Form.Label>
					<Form.Control
						type="text"
						name="residenceType"
						value={formData.residenceType}
						onChange={handleInputChange}
						placeholder="Apartment/House/Condo/Other"
						className="form-input"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicNumber">
					<Form.Label
						as="p"
						variant="primary"
						className="form-label text-primary">
						Number of Bedrooms
					</Form.Label>
					<Form.Control
						type="number"
						name="bedroomNumber"
						value={formData.bedroomNumber}
						onChange={handleInputChange}
						placeholder="e.g. 3"
						className="form-input"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicNumber">
					<Form.Label
						as="p"
						variant="primary"
						className="form-label text-primary">
						Number of Bathrooms
					</Form.Label>
					<Form.Control
						type="number"
						name="bathroomNumber"
						value={formData.bathroomNumber}
						onChange={handleInputChange}
						placeholder="e.g. 2"
						className="form-input"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicTextarea">
					<Form.Label
						as="p"
						variant="primary"
						className="form-label text-primary">
						Additional Terms and Conditions
					</Form.Label>
					<Form.Control
						type="email"
						name="additionalTerms"
						value={formData.additionalTerms}
						onChange={handleInputChange}
						as="textarea"
						rows={3}
						placeholder="Write here"
						className="form-input"
					/>
				</Form.Group>
				<Button variant="primary" className="submit-btn" type="submit">
					Create
				</Button>{" "}
				<br /> <br />
			</Form>
		</div>
	);
};

export default TenantForm;
