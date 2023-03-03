const Project = ({project}) => {
    return(
        <div className="project">
            <img src={project.img} alt="" />
            <div className="project__description">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
            </div>
        </div>
    )
}

export default Project;