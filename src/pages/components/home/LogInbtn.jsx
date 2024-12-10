import React from "react";
import avatar from '../../../assets/images/noavatar.png'

function LogInbtn(){

    return(
        <>
            <div>
                <img src={avatar} className="avatar me-4 mt-3"/>
            </div>
            <div>
                <a href="#" className="logbtn btn me-3 mt-3">Login</a>
            </div>
        </>
    )

}

export default LogInbtn;