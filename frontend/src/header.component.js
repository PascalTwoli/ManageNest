import logo from './logo.jpeg';
import { GoSearch, GoMail, GoLocation, GoBell, GoPersonFill } from "react-icons/go";
import photos from './photos.jpg'
import { useState } from 'react';
import ProfileCard from './profile_card.component';


const Bodyheader = () => {

    const [showOffcanvas, setShowOffcanvas] = useState (false);

    const handleShow = () => setShowOffcanvas(true);
    const handleClose = () => setShowOffcanvas(false);

    return (
        <div className="d-flex header-container">
            <div className='d-flex left'>
                <span><img src={logo} className='logo' alt=''/></span>
                <h1 className='text-primary'>
                    ManageNest
                </h1>
            </div>
            <div className='d-flex search-container'>
                <div >
                    <GoLocation className="" size={24} color='lightgrey'/>
                    <input className='input'/>
                </div>
                <button className='btn btn-primary'><GoSearch size={24}/></button>
            </div>
            <div className='d-flex right' >
                <GoMail size={28}/>
                <GoBell size={28}/>
                <div onClick={handleShow}> 
                    <img src={photos} className='profile' alt=''/>
                </div>
                
                <ProfileCard show={showOffcanvas} handleClose={handleClose}/>
            </div>
        </div>
    ); 
}

export default Bodyheader;