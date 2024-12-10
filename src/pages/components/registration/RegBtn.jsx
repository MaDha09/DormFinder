import React from "react";
import avatar from '../../../assets/images/noavatar.png'

function RegBtn(){

    return(
        <>
            <div>
                <img src={avatar} className="avatar me-4 mt-3"/>
            </div>
            <div>
                <button className="logbtn3 me-3 mt-3">Register</button>
            </div>
        </>
    )

}

export default RegBtn;