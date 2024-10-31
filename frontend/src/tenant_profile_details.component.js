import { PiChatTextBold } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import UniqueCodeDisplay from "./unique_code_display.component";


const TenantProfileDetails = ({tenantProfileData}) => {

    

    return (
        <div className="TenantProfileDetails">
            <header className="d-flex">
                <div><h5>{`${tenantProfileData.tenantFirstName}'s`} Profile</h5></div>
                <div  className="d-flex">
                    <span><PiChatTextBold  size={22}/>Text</span>
                    <span><MdOutlineMailOutline size={22}/>Email</span>
                </div>
            </header>

            <section className="section1 d-flex">
                <div className="div1 d-flex">
                    <div className="image-div">
                        <>img</>
                    </div>
                    <div className="d-flex flex-column">
                        <span className="span">{tenantProfileData.tenantFirstName+" "+ tenantProfileData.tenantLastName}</span>
                        <span>{`ID_${tenantProfileData.tenantNationalId}`}</span>
                        <span>{tenantProfileData.tenantEmail}</span>
                    </div>
                </div>

                <div className="edit-div">
                    <span>Edit <BiSolidEditAlt/> </span>
                </div>
            </section>
            <section className="section2">
                <div className="d-flex div2">
                    <h4>Profile Information</h4>
                    <div className="edit-div">
                        <span>Edit <BiSolidEditAlt/> </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h6>First Name</h6>
                        <span>{tenantProfileData.tenantFirstName}</span>
                    </div>
                    <div className="col-6">
                        <h6>Last Name</h6>
                        <span>{tenantProfileData.tenantLastName}</span>
                    </div>
                    <div className="col-6">
                        <h6>Email Address</h6>
                        <span>{tenantProfileData.tenantEmail}</span>
                    </div>
                    <div className="col-6">
                        <h6>Phone Number</h6>
                        <span>{tenantProfileData.tenantPhoneNumber}</span>
                    </div>
                    <div className="col-6">
                        <h6>Unique Code</h6>            
                        <span><UniqueCodeDisplay uniqueCode={tenantProfileData.uniqueCode} /></span>
                    </div>
                </div>
            </section>
            <section className="section2">
            <div className="d-flex div2">
                    <h4>More Information</h4>
                    <div className="edit-div">
                        <span>Edit <BiSolidEditAlt/> </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h6>Property Address</h6>
                        <span>{tenantProfileData.propertyAddress}</span>
                    </div>
                    <div className="col-6">
                        <h6>Block Name</h6>
                        <span>{tenantProfileData.tenantBlockName}</span>
                    </div>
                    <div className="col-6">
                        <h6>Unit Name</h6>
                        <span>{tenantProfileData.tenantUnitName}</span>
                    </div>
                    <div className="col-6">
                        <h6>Residence Type</h6>
                        <span>{tenantProfileData.residenceType}</span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TenantProfileDetails;


