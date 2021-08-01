import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "./storeInfo.css";
import "../../images/storeInfoPic.jpg";




const StoreInfo = () => {

    const location = useLocation();

    return (
        <div>
            <div className="storePage"> 
            
                <nav className="barItems" >
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Home
                    </Link>

                    <a className="browseInvLink" href="https://offerup.com/p/21498274" alt="">Browse Inventory</a>
                </nav>
            
                            <p className="address">Location: 15413-1st Ave. Ct. South Blg. G, Tacoma, WA 98444</p>
                                <p className="hours">Showroom Hours: By Appointment</p>
                                    <p className="phoneNumber">Phone Number:1-443-949-2766</p>
            </div>
        </div>
          


        
          
       
            
         );
}


export default StoreInfo
