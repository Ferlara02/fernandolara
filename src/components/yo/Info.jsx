import React from "react";

const Info = () => {
    return(
        <div className="yo__info grid">
            <a href="https://www.coderhouse.com/certificados/63b4740e444daf000e4824dc" target="_blank">
                <div className="yo__box">
                    <i class="uil uil-graduation-cap"></i>
                    <h3 className="yo__title">Formación</h3>
                    <span className="yo__subtitle">Coderhouse / Autónomo.</span>
                </div>
            </a>
            <a href="#portfolio"><div className="yo__box">
                <i class="uil uil-briefcase-alt"></i>
                <h3 className="yo__title">Proyectos</h3>
                <span className="yo__subtitle">5 proyectos completados.</span>
            </div></a>
        </div>
    )
}

export default Info