import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/NavBar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        
    <>
        <nav className="navbar">
            <div className="nav-container">
                <NavLink exact to="/" className="nav-logo">
                    <span>Banco IT</span>
                </NavLink>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
                            Inicio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/SobreOBanco" activeClassName="active" className="nav-links" onClick={handleClick}>
                            Sobre Nós
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/AbraConta" activeClassName="active" className="nav-links" onClick={handleClick}>
                            Serviços
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/Cartoes" activeClassName="active" className="nav-links" onClick={handleClick}>
                            Cartões
                        </NavLink>
                    </li>
                </ul>
                <div className="nav-icon" onClick={handleClick}>
                        {click ? (
                            <span className="icon">
                                <HamburgetMenuClose />{" "}
                            </span>
                        ) : (
                            <span className="icon">
                                <HamburgetMenuOpen />
                            </span>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
