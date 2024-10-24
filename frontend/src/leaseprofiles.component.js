import { BiSolidEdit } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import LeaseModal from "./lease_modal.component";

const LeaseProfiles = () => {
	const [activeItem, setActiveItem] = useState();

	//handling lease agreement modal
	const [show, setShow] = useState(false);

	//state to store lease
	const [leaseData, setLeaseData] = useState([]);

	const handleShow = (itemToShow) => {
		setActiveItem(() => itemToShow);
		setShow(true);
	};
	const handleClose = () => setShow(false);

	// fetch data from the local storage when the component mounts
	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem("tenantFormData")) || [];
		if (storedData) {
			setLeaseData(storedData);
		}
	}, []);

	return (
		<div>
			{leaseData.length > 0 ? (
				leaseData.map((profile, index) => (
					<div className="lease-profiles-container" key={index}>
						<div>
							<h5>{profile.tenantFirstName}</h5>
						</div>
						<div className="d-flex lease-profiles-div">
							<div className="lease-div">
								<div className="d-flex lease-div-div">
									<div>
										<h6>Lease start date</h6>
										<span>{profile.leaseStartDate}</span>
									</div>
									<div>
										<h6>Lease end date</h6>
										<span>{profile.leaseEndDate}</span>
									</div>
									<div>
										<h6>Status</h6>
										<span>{profile.leaseStatus}</span>
									</div>
									<div>
										<BiSolidEdit size={28} color="grey" />
									</div>
								</div>
								<Button
									className="btn lease-more-info-btn"
									onClick={() => handleShow(profile)}>
									More information
								</Button>
								<LeaseModal
									show={show}
									handleClose={handleClose}
									agreementData={activeItem}
								/>
							</div>
							<div className="lease-rent-div ">
								<p>Monthly Rent</p>
								<h5>{"KES" + profile.monthlyRent + ".00"}</h5>
								<h6 className="lease-rent-inc">
									{"+" + profile.monthlyRent - profile.prevMonthRent}
								</h6>
							</div>
						</div>
					</div>
				))
			) : (
				<div className="text-center text-default">
					No lease information submitted yet.
				</div>
			)}
		</div>
	);
};

export default LeaseProfiles;
