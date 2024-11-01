// TenantManagement.js
import React, { useState, useEffect } from 'react';
import TenantForm from './TenantForm';
import TenantOverview from './TenantOverview';
import { getFromLocalStorage, saveToLocalStorage } from './localStorageUtils';

const TenantManagement = () => {
  const [tenants, setTenants] = useState([]);

  // Load tenants from local storage on mount
  useEffect(() => {
    const storedData = getFromLocalStorage("tenantFormData") || [];
    setTenants(storedData);
  }, []);

  // Handle tenant addition
  const handleAddTenant = (newTenant) => {
    const updatedTenants = [...tenants, newTenant];
    setTenants(updatedTenants);
    saveToLocalStorage("tenantFormData", updatedTenants);
  };

  return (
    <div>
      <TenantForm onAddTenant={handleAddTenant} />
      <TenantOverview tenants={tenants} />
    </div>
  );
};