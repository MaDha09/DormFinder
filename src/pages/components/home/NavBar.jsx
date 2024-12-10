import React from "react";
import Logo from "./Logo";
import '../home/home.css'

const menus = ['Home', 'About', 'Contacts', 'Facts'];


function NavBar() {

    return(
        <>
        <div className="conNav">
            <div className="Logo">
                <Logo />
            </div>
            <div className="menu">
                <ul>

                {menus.map((menu, index) => (
                  <li key={index}>{menu}</li>
                ))}

                </ul>
            </div>
        </div>
        </>
    )
}

export default NavBar;