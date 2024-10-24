import TenantOverviewTable from "./tenant_overview_table.component";
import TenantOverviewHeader from "./tenant_overview_header.component";

const TenantOverview = () => {
    return (
        <div className="tenants-container">
            <TenantOverviewHeader/>
            <TenantOverviewTable/>
        </div>
    );
}

export default TenantOverview;