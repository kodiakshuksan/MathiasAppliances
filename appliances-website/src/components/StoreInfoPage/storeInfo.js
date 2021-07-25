import React from 'react';
import "./storeInfo.css";
import storeInfoPic from "../../images/storeInfoPic.jpg";

const StoreInfo = () => {
    return (
        <div className="infoContainer">
            <nav>
                <a href="/LandingPage" alt="">Home</a>
            </nav>
            <div className="info">
            <img className="storeInfoPic" src={storeInfoPic} alt="" />
                <div>Location</div>
                    <div>Hours: By Appointment</div>
                        <div>Phone Number:</div>
                            <div>Inventory-(OfferUp Link)</div>         
            </div>
        </div>
    )
}

export default StoreInfo
