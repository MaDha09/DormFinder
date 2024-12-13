import React from "react";
import NavBar from "./components/home/NavBar";
import ProfileInfo from "./components/profile/ProfileInfo";
import List from "./components/profile/List";

function Profile () {

    return(
        <>

        <div className="body">
                <div className="col1">

                        <NavBar />
                        <ProfileInfo />
                        <List />
                       
                </div>
                
                <div className="col2">

                       

                </div>
        </div>

        </>
    )

}

export default Profile;