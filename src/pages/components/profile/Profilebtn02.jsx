import React from "react";
import avatar from '../../../assets/images/noavatar.png';
import './profile.css';

function Profilebtn02 (){

     return(
            <>
                <div>
                    <img src={avatar} className="avatar me-4 mt-3"/>
                </div>
                <div>
                    <a href="/property" className="logbtn btn me-3 mt-3">Property</a>
                </div>
            </>
        )

}

export default Profilebtn02;