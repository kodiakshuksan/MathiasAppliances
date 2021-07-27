import React from 'react';
import "./storeInfo.css";
import background from "../../images/storeInfoPic.jpg";
import { Link, useLocation } from "react-router-dom";



const StoreInfo = () => {

    const location = useLocation();

    return (
        <div className="container-fluid"> 
        <div className="storePageContainer" style={{ backgroundImage: `url(${background})` }}>
               
            <nav className="nav itemA" >
            
                <Link to="/" style={{ textDecoration: 'none', color: '#4E342E', fontWeight: 'bolder', paddingLeft: '1050px', fontSize: '25px'}} className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
            
                    <a style={{ textDecoration: 'none', color: '#4E342E', paddingTop: '7px', fontWeight: 'bolder', fontSize: '25px' }} href="https://offerup.com/p/21498274" alt="">Browse Inventory</a>
            
        
            </nav>
        
                        <p className="address">Location: 15413 1st Ave Ct South Blg. G Tacoma, WA 98444</p>
                            <p className="hours">Showroom Hours: By Appointment</p>
                                <p className="phoneNumber">Phone Number:1-443-949-2766</p>
                    </div>
                    </div>
            
         );
}


export default StoreInfo
