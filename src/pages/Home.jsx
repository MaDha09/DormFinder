import React from "react";
import './components/home/home.css';
import NavBar from "./components/home/NavBar";
import Form from "./components/home/Form";
import LogInbtn from "./components/home/LogInbtn";

function Home(){
        return (
                <>
         <div className="body">
                <div className="col1">

                        <NavBar />
                        <Form />
                </div>
                
                <div className="col2">

                        <LogInbtn />

                </div>
         </div>
                </>
        )
}
export default Home;