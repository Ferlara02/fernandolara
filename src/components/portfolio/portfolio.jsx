import "./portfolio.css"

import { useState, React, useEffect } from "react"
import { projects } from "../../mock/projects.mock"

const Portfolio = () =>{
    const [projects, setProjects] = useState([]);
    const

    useEffect(() => {
        new Promise((resolve) => resolve(projects))
            .then((data) => {
                setProjects(data);
            })
    }, []);
    return(
        <div className="portfolio__container">

        </div>
    )
}

export default Portfolio