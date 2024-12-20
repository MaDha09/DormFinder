import React from "react";
import avatar from '../../../assets/images/noavatar.png'
import './property.css';

function  Rdetails(){

    return(
        <>
            <div>
                <img src={avatar} className="avatar me-4 mt-3"/>
            </div>
            <div>
                <a href="/profile" className="logbtn btn me-3 mt-3">Profile</a>
            </div>
        </>
    )

}

export default Rdetails;