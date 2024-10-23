import Modal from "react-bootstrap/Modal";
import LeaseAgreement from "./lease_agreement.component";

const LeaseModal = ({ show, handleClose, agreementData }) => {
	return (
		<>
			<Modal
				show={show}
				onHide={handleClose}
				size="xl"
				dialogClassName="modal-100w"
				aria-labelledby="example-custom-modal-styling-title">
				<Modal.Header closeButton>
					<Modal.Title
						id="example-custom-modal-styling-title"
						className="text-primary">
						Lease Agreement
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<LeaseAgreement agreementData={agreementData} />
				</Modal.Body>
			</Modal>
		</>
	);
};

export default LeaseModal;
