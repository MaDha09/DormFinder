import React from "react";
import NavBar from "./components/home/NavBar";
import './components/property/property.css';
import PropertyImg from "./components/property/PropertyImg";
import PropertyDescrip from "./components/property/PropertyDescrip";
import Feedback from "./components/property/Feedback";
import Rdetails from "./components/property/Rdetails";

function Property () {
    return (
        <>
            <div className="body">
                    <div className="colu1">

                            <NavBar />
                            <PropertyImg />
                            <PropertyDescrip />
                            <hr className="mt-4"/>
                            <div className="bgcolor">
                            <Feedback />
                            </div>
                    </div>
                    
                    <div className="colu2">

                           <Rdetails />

                    </div>
            </div>
        </>
)
}

export default Property;