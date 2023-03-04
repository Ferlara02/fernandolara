import React from "react";


const Skills = () => {
    return(
        <section data-aos="fade-right" className="skills section">
            <h2 className="section__title">Skills</h2>

            <div className="skills__container container grid">
                <div className="skills__content">
                    <h3 className="skills__title">Frontend developer</h3>
                    <div className="skills__box">
                        <div className="skills__group">
                            <div className="skills__data">
                                <i class="uil uil-html5"></i>
                                <div>
                                    <h3 className="skills__name">HTML5
                                    </h3>
                                    <span className="skills__level"></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i class="uil uil-css3-simple"></i>
                                <div>
                                    <h3 className="skills__name">CSS3
                                    </h3>
                                    <span className="skills__level">Intermedio</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i class="uil uil-java-script"></i>
                                <div>
                                    <h3 className="skills__name">Javascript
                                    </h3>
                                    <span className="skills__level">Basico</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills__group">
                            <div className="skills__data">
                                <i class="uil uil-react"></i>
                                <div>
                                    <h3 className="skills__name">React JS
                                    </h3>
                                    <span className="skills__level">Intermedio</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i class="uil uil-bars"></i>
                                <div>
                                    <h3 className="skills__name">Bootstrap
                                    </h3>
                                    <span className="skills__level">Basico</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i class="uil uil-github-alt"></i>
                                <div>
                                    <h3 className="skills__name">Git & GitHub
                                    </h3>
                                    <span className="skills__level">Intermedio</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills__content">
                    <h3 className="skills__title">Backend developer</h3>
                    <div className="skills__box">
                        <div className="skills__group">
                            <div className="skills__data">
                                <i class="uil uil-database-alt"></i>
                                <div>
                                    <h3 className="skills__name">Firebase
                                    </h3>
                                    <span className="skills__level">Basic</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i class="uil uil-setting"></i>
                                <div>
                                    <h3 className="skills__name">Node JS
                                    </h3>
                                    <span className="skills__level">Basic</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i class="uil uil-hourglass"></i>
                                <div>
                                    <h3 className="skills__name">Learning
                                    </h3>
                                    <span className="skills__level">...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills