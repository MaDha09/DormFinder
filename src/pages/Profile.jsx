import React from "react";
import NavBar from "./components/home/NavBar";
import ProfileInfo from "./components/profile/ProfileInfo";
import List from "./components/profile/List";
import './components/profile/profile.css'
import Profilebtn02 from "./components/profile/Profilebtn02";

function Profile () {

    return(
        <>

        <div className="body">
                <div className="column21">

                        <NavBar />
                        <ProfileInfo />
                        <List />
                       
                </div>
                
                <div className="column22">

                       <Profilebtn02 />

                </div>
        </div>

        </>
    )

}

export default Profile;