import React from "react";
import NavBar from "./components/home/NavBar";
import CreatePost from "./components/createpost/CreatePost";
import Profilebtn from "./components/createpost/Profilebtn";

function File (){

    return(
        <>

        <div className="body">
                <div className="col1">

                        <NavBar />
                        <CreatePost />
                       
                </div>
                
                <div className="column2">

                       <Profilebtn />
                </div>
         </div>

        </>
    )

}

export default File;