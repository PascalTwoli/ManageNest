import { RiArrowDropDownLine } from "react-icons/ri";
import ToggleBtn from "./toggle_btn.component";
import React, { useEffect, useState } from "react";
import { fetchAdmin } from "./services/adminServices";
import { Spinner } from "react-bootstrap";
import { supabase } from "./helper/supabaseClient";


const ManageSettings = () => {
    const [notifications, setNotifications] = useState({
        notification1: false,
        notification2: false,
        notification3: false,
        notification4: false,
        notification5: false,
        notification6: false,
    })

const [userData, setUserData] = useState (null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
    

    // const handleToggleChange = (isToggled) => {
    //     setNotificationStatus (isToggled ? 'enabled' : 'disabled');
    // }

    const handleToggle = (notificationKey) => {
        setNotifications((prevNotifications) => ({
          ...prevNotifications,
          [notificationKey]: !prevNotifications[notificationKey],
        }));
      };

      //fetch user inforamtion from the database
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

    //   if (loading) return (
    //     <Spinner animation="border" role="status">
    //         <span className="visually-hidden">Loading...</span>
    //     </Spinner>
    //   )

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
        <div>
            <div>
                <h4>Settings</h4>
            </div>

            <div className="profile-settings-container">
                <h6>Account Settings</h6>
                <p className="p4">Update your profile information incase of any changes</p>
                <div className="d-flex profile-settings-div">
                    <div>profile image</div>
                    <div className="row"> 
                        <div className="col-6" >
                            <p>Name</p>
                            <span>{userData.username}</span>
                        </div>
                        <div className="col-6">
                            <p>Phone number</p>
                            <span>{userData.phone}</span>
                        </div>
                        <div className="col-6">
                            <p>Email</p>
                            <span>{userData.email}</span>
                        </div>
                        {/* <div className="col-6">
                            <p>Accupation</p>
                            <span>Software engineer</span>
                        </div> */}
                    </div>
                    <div>
                        <button className="btn btn-primary">Update</button>
                    </div>
                </div>

                <h6>Notifications setup</h6>
                <p className="p4">Setup notifications to stay updated on inportant activities</p>
                <div className="notifications-container row">
                    <div className="col-6">
                        <div className="">
                            <p>Reminders for upcoming rent due dates</p>
                            <span className="d-flex"> {notifications.notification1 ? "Enabled" : "Disabled"}
                            <ToggleBtn
                                isToggled={notifications.notification1}
                                onToggle={() => handleToggle("notification1")}
                                />
                            </span>
                        </div>
                        <div className="">
                            <p>Allow grace periods when rent is due</p>
                            <span className="d-flex"> {notifications.notification2 ? "Enabled" : "Disabled"}
                            <ToggleBtn
                                isToggled={notifications.notification2}
                                onToggle={() => handleToggle("notification2")}
                                />
                            </span>
                        </div>
                        <div className="">
                            <p>Allow tenants access to their profiles and payment information</p>
                            <span className="d-flex"> {notifications.notification3 ? "Enabled" : "Disabled"}
                            <ToggleBtn
                            isToggled={notifications.notification3}
                            onToggle={() => handleToggle("notification3")}
                            />
                            </span> 
                        </div>    
                        <div className="">
                            <p>Toggle Display</p>
                            <span className="d-flex"> {notifications.notification4 ? "Enabled" : "Disabled"}
                                <ToggleBtn
                                    isToggled={notifications.notification4}
                                    onToggle={() => handleToggle("notification4")}
                                />
                            </span>
                        </div>
                        
                    </div>
                    <div className="col-5">
                        <div>
                            <p>Currency</p>
                            <span className="d-flex">Ksh <RiArrowDropDownLine size={24} className="toggle-icon"/></span>
                        </div>
                        <div>
                            <p>Language</p>
                            <span className="d-flex">English <RiArrowDropDownLine size={24} className="toggle-icon"/></span>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    );
}

export default ManageSettings;