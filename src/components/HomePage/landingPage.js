import React from 'react';
import "./landingPage.css";
import "../../images/landingPagePic.jpg";

const LandingPage = () => {
    return (
        <div className="startPage">
          <nav>
                  <a className="storeInfoLink" href="./storeInfo">Store Info</a>
          </nav>
                <div className="businessName">
                    <p>Mathias Appliances</p>
                </div>
      </div>
    );
  }
  

export default LandingPage
