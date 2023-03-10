import React from "react";
import Social from "./Social";
const Data = () => {
    return (
        <div className="home__data">
            <h1 className="home__title">Fernando Lara <Social/></h1>
            <h3 className="home__subtitle">Desarrollador Frontend</h3>
            <p className="home__description">Hola! soy un Desarrollador web Frontend cordobés en continua formación, actualmente con el objetivo de convertirme en un Desarollador Fullstack.</p>

            <div className="contact1">
                <a href="#contacto" className="button button--flex">Escríbeme! <i class="uil uil-navigator"></i></a>
            </div>
        </div>
    )
}

export default Data