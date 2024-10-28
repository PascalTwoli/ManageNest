import { FaToggleOn } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineToggleOff } from "react-icons/md";

const ManageSettings = () => {
    
    return (
        <div>
            <div>
                <h4>Settings</h4>
            </div>

            <div className="profile-settings-container">
                <h6>Profile setup</h6>
                <p className="p4">Update your profile information incase of any changes</p>
                <div className="d-flex profile-settings-div">
                    <div>profile image</div>
                    <div className="row"> 
                        <div className="col-6" >
                            <p>Name</p>
                            <span>Pascal Twoli</span>
                        </div>
                        <div className="col-6">
                            <p>Phone number</p>
                            <span>07088394302</span>
                        </div>
                        <div className="col-6">
                            <p>Email</p>
                            <span>pascaltwoli@gmail.com</span>
                        </div>
                        <div className="col-6">
                            <p>Accupation</p>
                            <span>Software engineer</span>
                        </div>
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
                            <span>Enabled <FaToggleOn size={24} className="toggle-icon"/></span>
                        </div>
                        <div className="">
                            <p>Allow grace periods when rent is due</p>
                            <span>Enabled <FaToggleOn size={24}  className="toggle-icon"/></span>
                        </div>
                        <div className="">
                            <p>Allow tenants access to their profiles and payment information</p>
                            <span>Enabled <FaToggleOn size={24} className="toggle-icon"/></span>
                        </div>
                    </div>
                    <div className="col-5">
                        <div>
                            <p>Currency</p>
                            <span>KSH <RiArrowDropDownLine size={24} className="toggle-icon"/></span>
                        </div>
                        <div>
                            <p>Language</p>
                            <span>English <RiArrowDropDownLine size={24} className="toggle-icon"/></span>
                        </div>
                        <div>
                            <p>Toggle Display</p>
                            <span>Light <MdOutlineToggleOff size={24} className="toggle-icon" />Dark</span>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    );
}

export default ManageSettings;