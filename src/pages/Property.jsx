import React from "react";
import NavBar from "./components/home/NavBar";
import './components/property/property.css';
import PropertyImg from "./components/property/PropertyImg";
import PropertyDescrip from "./components/property/PropertyDescrip";
import Feedback from "./components/property/Feedback";

function Property () {
    return (
        <>
            <div className="body">
                    <div className="col1">

                            <NavBar />
                            <PropertyImg />
                            <PropertyDescrip />
                            <hr />
                            <Feedback />
                           
                    </div>
                    
                    <div className="colu2">

                           

                    </div>
            </div>
        </>
)
}

export default Property;