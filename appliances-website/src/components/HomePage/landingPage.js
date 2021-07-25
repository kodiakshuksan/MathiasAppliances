import React from 'react';
import "./landingPage.css";
import background from "../../images/landingPagePic.jpg";

const LandingPage = () => {
    return (
        <div className="mainPic businessPageContainer" style={{ backgroundImage: `url(${background})` }}>
              <nav className="navItems">
              <a href="/storeInfo" alt="">Store Info</a>
              </nav>
        Mathias Appliances
      </div>
    );
  }
  

export default LandingPage
