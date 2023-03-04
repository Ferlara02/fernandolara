import React from "react";
import Project from "./project";

const ProjectsList = ({projects1}) =>{
    return(
        <div data-aos="fade-left" className="projects__list">
            {projects1.map((project) => (
                <Project project={project} />
            ))}
        </div>
    )
}

export default ProjectsList;