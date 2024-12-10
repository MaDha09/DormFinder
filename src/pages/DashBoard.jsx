import React from "react";
import NavBar from "./components/home/NavBar";
import BtnProfile from "./components/dashboard/BtnProfile";
import BodyMsg from "./components/dashboard/BodyMsg";
import DashForm from "./components/dashboard/DashForm";
import CardBox from "./components/dashboard/CardBox";

function DashBoard (){
    return(
        <>

        <div className="body">
                <div className="col1">

                        <NavBar />
                        <BodyMsg />
                        <DashForm />
                        <CardBox />
                       
                </div>
                
                <div className="col2">

                        <BtnProfile />

                </div>
        </div>

        </>
    )
}

export default DashBoard;