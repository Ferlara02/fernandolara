import React from "react"
import "./yo.css";
import CV from "../../assets/CV-FernandoLara.pdf"
import PerfImg from "../../assets/perfil.jpeg"
import Info from "./Info";
import Skills from "./Skills";

const Yo = () => {
    return(
        
        <section data-aos="fade-up" className="yo section" id="yo">
            <h2 className="yo__title2">Acerca de mí</h2>
            <div className="yo__container container grid">
                <img src={PerfImg} alt="" className="yo__img" />
                <div className="yo__data">
                    <Info/>

                    <p className="yo__description">Finalicé la carrera de Desarrollo web Frontend en diciembre del 2022. Desde entonces, no paré de practicar lo adquirido a la vez que incorporaba nuevas herramientas. A día de hoy, me considero un desarrollador profundamente interiorizado en el mundo del Frontend, con habilidades en lógica y componentización optimizada. </p>

                    <a download="" href={CV} className="button button--flex">Descarga mi CV <i class="uil uil-file"></i></a>
                </div>
            </div>
            <Skills/>
        </section>
        
        
    )
}

export default Yo