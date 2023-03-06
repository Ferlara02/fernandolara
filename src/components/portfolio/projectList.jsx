import React, { useEffect } from "react";
import Project from "./project";

const ProjectsList = ({projects1, option}) =>{

    
    return(
        <div data-aos="fade-up" className="projects__list">
            {projects1.map((project) => (
                <Project project={project} />
            ))}
        </div>
        
    )
}

export default ProjectsList;