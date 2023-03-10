import React, { useState } from "react";
import { Logo } from "../../assets/logo";
import "./header.css";
import SinT from "../../assets/logo.png"
const Header = () => {
    const [Toggle, showMenu] = useState(false);

    const [activeNav, setActiveNav] = useState(`#home`);
    return(
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo"><img src={SinT} alt="logo" /></a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i>
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#yo" onClick={() => setActiveNav("#yo")} className={activeNav === "#yo" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-user nav__icon"></i>
                                Yo
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-bag nav__icon"></i>
                                Portfolio
                            </a>
                        </li>
                        
                        <li className="nav__item">
                            <a href="#contacto" onClick={() => setActiveNav("#contacto")} className={activeNav === "#contacto" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-message nav__icon"></i>
                                Contacto
                            </a>
                        </li>
                    </ul>
                    
                    <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;