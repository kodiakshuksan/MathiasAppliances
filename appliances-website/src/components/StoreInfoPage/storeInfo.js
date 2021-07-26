import React from 'react';
import "./storeInfo.css";
import background from "../../images/storeInfoPic.jpg";

const StoreInfo = () => {
    return (
    <div className="infoPagePic mainPic" style={{ backgroundImage: `url(${background})` }}>
    <nav className="navItems">
    <a href="/landingPage" alt="">Home</a>
    </nav>

                <div className="location">Location</div>
                    <div className="hours">Hours: By Appointment</div>
                        <div className="phoneNumber">Phone Number:</div>
                            <div className="inventory">Inventory-(OfferUp Link)</div>         
            </div>

            
        

    );
}


export default StoreInfo
