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

                    <p className="yo__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aliquam rerum vel a exercitationem, dolor, in aperiam laborum nostrum iste facilis modi porro debitis adipisci mollitia qui! Est, eius similique?</p>

                    <a download="" href={CV} className="button button--flex">Descarga mi CV <i class="uil uil-file"></i></a>
                </div>
            </div>
            <Skills/>
        </section>
        
        
    )
}

export default Yo