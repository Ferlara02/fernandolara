import "./portfolio.css"

import { useState, React, useEffect } from "react"
import { projects } from "../../mock/projects.mock"
import ProjectsList from "./projectList"

const Portfolio = () =>{
    const [projects1, setProjects1] = useState([]);

    useEffect(() => {
        new Promise((resolve) => resolve(projects))
            .then((data) => {
                setProjects1(data);
            })
    }, []);
    return(
        <div className="portfolio__container container" id="portfolio">
            <i class="uil uil-bag portfolio__icon"></i>
            <h3>Proyectos</h3>
            <ProjectsList projects1={projects1} />
        </div>
    )
}

export default Portfolio;