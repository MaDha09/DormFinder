import React from "react";
import logo from '../../../assets/images/logo.png';


function Logo(){
    return (
        <>
        <div className="logoCon ms-3">
            <img src={logo}  alt={logo}/>
        </div>
        <div className="title ms-2">
            <h4>DormFinder</h4>
        </div>
        </>
    )
}

export default Logo;