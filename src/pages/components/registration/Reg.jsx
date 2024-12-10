import React from "react";
import './reg.css';
import NavBar from "../home/NavBar";
import RegForm from "./RegForm";
import RegBtn from "./RegBtn";

function Reg(){
        return (
                <>
         <div className="body">
                <div className="col1">

                        <NavBar />
                        <RegForm/>
                </div>
                
                <div className="col2">

                        <RegBtn />

                </div>
         </div>
                </>
        )
}
export default Reg;