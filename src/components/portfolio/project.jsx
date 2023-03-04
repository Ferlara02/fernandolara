

const Project = ({project}) => {
    return(
        <>
        
            <div href={project.vivo} className="project">
                <img src={project.img} alt="" />
                <div className="project__description">
                    <div>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </div>
                    <div>
                        <a className="botonCode" href={project.github} target="_blank"><i class="uil uil-github"></i>Code</a>
                        <a className="botonCode" href={project.vivo} target="_blank"><i class="uil uil-link-h"></i>Sitio</a>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Project;