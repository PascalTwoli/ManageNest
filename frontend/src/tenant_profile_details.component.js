import { PiChatTextBold } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";


const TenantProfileDetails = () => {
     

    return (
        <div>
            <header className="d-flex">
                <div>Pascals Profile</div>
                <div  className="d-flex">
                    <span><PiChatTextBold />Text</span>
                    <span><MdOutlineMailOutline />Email</span>
                </div>
            </header>

            <section className="section1">
                <div>
                    <>image</>
                </div>
                <div>
                    
                </div>
                <div></div>
            </section>
            <section className="section2">
                <div className="d-flex">
                    
                </div>
                <div></div>
            </section>
            <section className="section3"></section>
        </div>
    );
}

export default TenantProfileDetails;