import { useState } from "react";
import { supabase } from "../helper/supabaseClient"

// const [error, setError] = useState(null);

//function to add new tenant to the database
export const addTenant = async (tenantData) => {
    try {
        const {data, error} = await supabase
        .from('tenants')
        .insert([tenantData])

        if (error) throw error;
        return data;  
        
    } catch (error) {
        
        console.error('Error adding tenant:', error.message);
		return null;
    }
 
}

// function to fetch all tenants from the database
export const fetchTenants = async () => {
	try {
		const { data, error } = await supabase.from('tenants').select('*');
		if (error) throw error;
		return data;
	} catch (error) {
		console.error('Error fetching tenants:', error.message);
		return null;
	}
};

//function to update an existing tenant's information
export const updateTenant = async (tenantId, updatedData) => {
	try {
		const { data, error } = await supabase
			.from('tenants')
			.update(updatedData)
			.eq('tenantId', tenantId);
		if (error) throw error;
		return data;
	} catch (error) {
		console.error('Error updating tenant:', error.message);
		return null;
	}
};


//function to delete a tenant from the database
export const deleteTenant = async (tenantId) => {
	try {
		const { data, error } = await supabase
			.from('tenants')
			.delete()
			.eq('tenantId', tenantId);
		if (error) throw error;
		return data;
	} catch (error) {
		console.error('Error deleting tenant:', error.message);
		return null;
	}
};

//  generating a character unique code
export const generateUniqueCode = async () => {
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	let code = "";
	for (let i = 0; i < 7; i++) {
		code += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return code;
};


export const transactionRef = async () => {
    const idStrLen = 10;
    let idStr = (Math.floor((Math.random() * 25)) + 10).toString(36).toUpperCase();
    idStr += (new Date()).getTime().toString(36).toUpperCase();

    if (!idStr.startsWith("S")) {
        idStr = "S" + idStr;
    }

    while (idStr.length < idStrLen) {
        idStr += (Math.floor((Math.random() * 35))).toString(36).toUpperCase();
    }

    idStr = idStr.slice(0, idStrLen);
    return idStr;
}


