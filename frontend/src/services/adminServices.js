
import { redirect } from "react-router-dom";
import { supabase } from "../helper/supabaseClient";





// function to  create a new a account

export const handleSignupToManageNest = async (username, email, phone, password) =>  {
    const { user, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                username,
                phone
            }
        }
    });

    if (error) {
        alert("Signup failed: " + error.message);
        return;
    }

    //     // Add other details to a separate "profiles" table or any custom user table you created.
    // const { data, error: profileError } = await supabase
    //     .from('admin')  // Assuming "profiles" table exists for user details
    //     .insert([{username, phoneNumber, email}]);


    // if (profileError) {
    //     alert("Error saving user profile: " + profileError.message);
    // } else {
    //     alert("Signup successful!");
    // }
    alert("Signup successful!");
}
// ssign in
//
export const handleSigninToManageNest = async (email, password) => {
  try {
    // Ensure both email and password are provided
    if (!email || !password) {
      throw new Error("Email and password must be provided.");
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return redirect ("./mainbody")
  } catch (error) {
    console.error('Error signing in:', error.message);
    throw error;
  }
};


export const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      alert("Sign-out successful!");
    } catch (error) {
      console.error("Error signing out:", error.message);
      alert("Error signing out: ",  error.message);
    }
  };



  //functon to fetch amin profile information
  export const fetchAdmin  = async (email) =>  { 
    try {
        const {user, error} = await supabase
        .from('admin') 
        .select("*")
        .eq('email',email)
        .single();
        
        if (error) throw error;
        return user;
    } catch (error) {
        console.error('Error fetching user info:', error.message);
		return null;
    }

  }
  