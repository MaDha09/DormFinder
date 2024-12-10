import React from "react";
import NavBar from "./components/home/NavBar";
import BtnProfile from "./components/dashboard/BtnProfile";
import BodyMsg from "./components/dashboard/BodyMsg";

function DashBoard (){
    return(
        <>

        <div className="body">
                <div className="col1">

                        <NavBar />
                        <BodyMsg />
                       
                </div>
                
                <div className="col2">

                        <BtnProfile />

                </div>
        </div>

        </>
    )
}

export default DashBoard;