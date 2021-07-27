import React from 'react';
import "./landingPage.css";
import background from "../../images/landingPagePic.jpg";

const LandingPage = () => {
    return (
        <div className="container-fluid">
        <div className="businessPageContainer" style={{ backgroundImage: `url(${background})` }}>
              <nav className="itemA">
                    <a style={{ textDecoration: 'none', color: '#4E342E', paddingLeft: '1080px', fontSize: '25px', fontWeight: 'bolder' }} href="/storeInfo" alt="Store Info">Store Info</a>
              </nav>
        <p className="businessName">Mathias Appliances</p>
      </div>
      </div>
    );
  }
  

export default LandingPage
