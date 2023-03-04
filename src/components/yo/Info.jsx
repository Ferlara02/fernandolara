import React from "react";

const Info = () => {
    return(
        <div className="yo__info grid">
            <div className="yo__box">
                <i class="uil uil-graduation-cap"></i>
                <h3 className="yo__title">Formación</h3>
                <span className="yo__subtitle">Coderhouse / Autónomo.</span>
            </div>

            <div className="yo__box">
                <i class="uil uil-briefcase-alt"></i>
                <h3 className="yo__title">Proyectos</h3>
                <span className="yo__subtitle">5 proyectos reales completados.</span>
            </div>
        </div>
    )
}

export default Info