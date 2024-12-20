import React from "react";
import Logo from "./Logo";
import "../home/home.css";

const menus = [
    { name: "Home", href: "/dashboard" },
    { name: "About", href: "#" },
    { name: "Contacts", href: "##" },
    { name: "Facts", href: "#" },
];

function NavBar() {
    return (
        <>
            <div className="conNav">
                <div className="Logo">
                    <Logo />
                </div>
                <div className="menu">
                    <ul>
                        {menus.map((menu, index) => (
                            <li key={index}>
                                <a href={menu.href}>{menu.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default NavBar;
