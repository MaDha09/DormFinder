import React from "react";
import NavBar from "../home/NavBar";
import UpdateForm from "./UpdateForm";
import './update.css'
import Updatetbn from "./Updatebtn";

function ProfileUpdate(){

    return (
        <>
            <div className="body">
                    <div className="col1">

                            <NavBar />
                            <UpdateForm />
                    </div>
                    
                    <div className="col2">

                            <Updatetbn />

                    </div>
            </div>
        </>
    )

}

export default ProfileUpdate;