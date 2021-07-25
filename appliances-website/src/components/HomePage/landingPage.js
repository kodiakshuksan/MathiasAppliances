import React from 'react';
import "./landingPage.css";
import landingPagePic from "../assets/landingPagePic.jpg";

const LandingPage = () => {
    return (
        <div className="businessPageContainer">
            <nav className="storeInfoLink">
                    <a href="/storeInfo" alt="">Store Information</a>
            </nav>
            <div>
            <img src={landingPagePic} alt="" />
            <div className="businessName">
            <h1>Mathias Appliances</h1>
           
            </div>
            </div>
        </div>
    )
}

export default LandingPage
