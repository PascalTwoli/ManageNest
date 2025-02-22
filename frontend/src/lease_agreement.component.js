import { useEffect, useState } from "react";
import { supabase } from "./helper/supabaseClient";
import { Spinner } from "react-bootstrap";

const LeaseAgreement = ({ agreementData }) => {
	const [loading, setLoading]= useState(false);
	const [userData, setUserData] = useState (null);
	const [error, setError] = useState(null);
	
	
	useEffect(() => {
        const loadAdmin = async ( ) => {
            try {
                setLoading(true);
                //get the user from the session
                const {data: {user}} = await supabase.auth.getUser();
    
                if (error) {
                    throw error.message; // handle error fetching user
                }

                const {
                    username, phone, email
                } = user.user_metadata

                setUserData(() => ({username, phone, email}))
    
    
            } catch (err) {
                console.error('Error fetching user info:', err.message);
                setError('Error fetching user information.');
            }
   
        }
        loadAdmin();
      }, []);

	  if (error) {
        return <div>{error}</div>;
    }

    if (!userData) {
        return <div>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>;
    }

	return (
		<div className="leaseAgreement">
			<ol className="ol1">
				<li>
					THE PARTIES. This Lease Agreement (“Agreement”) made this{" "}
					<span>{agreementData.tenantMoveInDate}</span>
					is between: <br />
					Landlord: <span>{userData.username}</span> with a mailing address
					of <span>{userData.email}</span>
					("Landlord"), and <br />
					Tenant(s):{" "}
					<span>
						{agreementData.tenantFirstName +
							" " +
							agreementData.tenantLastName}
					</span>{" "}
					with a mailing address of{" "}
					<span>{agreementData.tenantEmail}</span>
					(“Tenant”).
					<br />
				</li>
				<li className="ol1">
					PREMISES. The Landlord agrees to rent the following property to
					the Tenant in exchange for the Payment Terms in Section IV:{" "}
					<li className="ol2">
						Property Address: <span>{agreementData.propertyAddress}</span>
					</li>
					<li className="ol2">
						Residence Type: <span>{agreementData.residenceType}</span>
					</li>
					<li className="ol2">
						Bedroom(s): <span>{agreementData.bedroomNumber}</span>{" "}
						Bathroom(s): <span>{agreementData.bathroomNumber}</span>
					</li>
				</li>
				<li className="ol1">
					LEASE TYPE. This Agreement shall be considered a: (check one)
					<br />
					<li className="ol3">
						{" "}
						Fixed Lease. The Tenant shall be allowed to occupy the
						Premises starting on{" "}
						<span>{agreementData.leaseStartDate}</span>, and ending on{" "}
						<span>{agreementData.leaseEndDate}</span> (“Lease Term”). At
						the end of the Lease Term, the Landlord and Tenant shall be
						required to negotiate renewal options, or the Tenant will be
						forced to vacate the premises.
					</li>
					<li className="ol3">
						Month-to-Month Lease. The Tenant shall be allowed to occupy
						the Premises on a month-to-month arrangement starting on{" "}
						<span>{agreementData.leaseStartDate}</span>
						and ending upon notice of <span>6 months</span> days from
						either the Landlord or Tenant (“Lease Term”).
					</li>
				</li>
				<li className="ol1">
					PAYMENT TERMS. During the Lease Term, the Tenant shall be
					responsible for the following: (check all that apply)
					<li className="ol3">
						Monthly Rent. <span>KES {agreementData.monthlyRent}</span> due
						on the <span>30th</span> of each month.
					</li>
					<li className="ol3">
						Security Deposit.{" "}
						<span> KES {agreementData.securityDeposit}</span> due at
						signing of this Agreement.
					</li>
					<li className="ol3">
						Last Month’s Rent.{" "}
						<span>KES {agreementData.prevMonthRent}</span> due at signing
						of this Agreement.
					</li>
					<li className="ol3">
						Other.
					</li>
				</li>
				<li className="ol1">
					UTILITIES. The Tenant shall be responsible for all utilities and
					services to the Premises except for: <span>Water meters</span>{" "}
					and <span>Power meters</span>.
				</li>
				<li className="ol1">
					ADDITIONAL TERMS. <span>{agreementData.additionalTerms}</span>
				</li>
				<p>
					Landlord’s Signature:<p className="sign-p"> <span className="sign-span">PasTwoli</span> </p>Tenant’s Signature:<p className="sign-p"><span className="sign-span">MarkLar</span></p>
				</p>
			</ol>
		</div>
	);
};

export default LeaseAgreement;
