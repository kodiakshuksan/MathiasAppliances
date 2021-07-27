import React from 'react';
import "./landingPage.css";
import background from "../../images/landingPagePic.jpg";

const LandingPage = () => {
    return (
        <div className="container-fluid">
        <div className="businessPageContainer" style={{ backgroundImage: `url(${background})` }}>
              <nav className="navItems" style={{ fontWeight: 'bolder', paddingTop: '10px'}}>
              <a style={{ textDecoration: 'none', color: '#4E342E', fontSize: '25px', paddingLeft: '1050' }} href="/storeInfo" alt="Store Info">Store Info</a>
              </nav>
        <p className="businessName">Mathias Appliances</p>
      </div>
      </div>
    );
  }
  

export default LandingPage
