import React from "react";
import avatar from '../../../assets/images/noavatar.png'
import bg from '../../../assets/images/bg.png';

function Profilebtn(){

    return(
            <>
                <div className="subcol">
                <div>
                    <img src={avatar} className="avatar me-4 mt-3"/>
                </div>
                <div>
                    <a href="/profile" className="logbtn btn me-3 mt-3">Profile</a>
                </div>
                </div>
                <img src={bg} className="bgimg"/>
            </>
        )
}

export default Profilebtn;