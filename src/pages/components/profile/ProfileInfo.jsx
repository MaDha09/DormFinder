import React from "react";
import avatar from '../../../assets/images/noavatar.png';
import './profile.css'

function ProfileInfo () {

    return(
        <>
            <div className="profile">

                <h3>Profile's Information</h3>

                <div className="details">
                    <h5 className="avat">
                        Avatar: <img src={avatar} alt="" />
                    </h5>

                    <h5 className="username">
                        Username: dharel
                    </h5>

                    <h5 className="email">
                        Email: azura@gmail.com
                    </h5>
                </div>

            <div className="orderbtn">
                <a href="/update" className="profbtn btn btn1">Update Profile</a>

                <a href="/" className="btn profbtn btn2">Logout</a>
            </div>

            </div>
        </>
    )

}

export default ProfileInfo;