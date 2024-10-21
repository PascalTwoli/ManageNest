import logo from './logo.jpeg';
import { GoSearch, GoMail, GoLocation, GoBell, GoPersonFill } from "react-icons/go";


const Bodyheader = () => {

    return (
        <div className="d-flex header-container">
            <div className='d-flex left'>
                <span><img src={logo} className='logo'/></span>
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
                <GoPersonFill size={28} />
            </div>
        </div>
    ); 
}

export default Bodyheader;