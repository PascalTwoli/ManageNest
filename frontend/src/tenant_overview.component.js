import TenantOverviewTable from "./tenant_overview_table.component";
import TenantOverviewHeader from "./tenant_overview_header.component";

const TenantOverview = ({onSelectTenant}) => {
    return (
        <div className="tenants-container">
            <TenantOverviewHeader/>
            <TenantOverviewTable onSelectTenant={onSelectTenant}/>
        </div>
    );
}

export default TenantOverview;