import LeaseProfiles from "./leaseprofiles.component";

const LeaseOverview = () => {
    
    return (
        <div className="leaseOverview-Container">
            <div>
                <h4>Lease information</h4>
                <h6>Lease overview</h6>
            </div>
            <LeaseProfiles/>
        </div>
    );
}

export default LeaseOverview;
