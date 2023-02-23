import React from "react"
import "./yo.css";
import CV from "../../assets/CV-FernandoLara.pdf"
import PerfImg from "../../assets/perfil.jpeg"
import Info from "./Info";
import Skills from "./Skills";
const Yo = () => {
    return(
        <section className="yo section" id="yo">
            <h2 className="yo__title2">Acerca de mí</h2>
            <div className="yo__container container grid">
                <img src={PerfImg} alt="" className="yo__img" />
                <div className="yo__data">
                    <Info/>

                    <p className="yo__description">descripcion-... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, sed unde! Voluptate placeat distinctio voluptatem laudantium reprehenderit perferendis alias maiores sit facilis magni, dolorum doloribus, labore nemo neque</p>

                    <a download="" href={CV} className="button button--flex">Descarga mi CV <i class="uil uil-file"></i></a>
                </div>
            </div>

            <Skills />
        </section>
    )
}

export default Yo