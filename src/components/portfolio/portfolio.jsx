import "./portfolio.css"

import { useState, React, useEffect, useRef } from "react"
import { projects } from "../../mock/projects.mock"
import ProjectsList from "./projectList"

const Portfolio = () =>{
    const [projects1, setProjects1] = useState([]);
    const [open, setOpen] = useState(false);
    
    const Options = ["Todos", "Reales", "Prácticas"];
    const [option, setOption] = useState(Options[0]);

    const menuRef = useRef();
    const titleRef = useRef();

    window.addEventListener("click", (e) => {
        if(e.target !== menuRef.current && e.target !== titleRef.current){
            setOpen(false);
        }
    });

    useEffect(() => {
        new Promise((resolve) => resolve(projects))
            .then((data) => {
                if(option !== "Todos"){
                    const categories = data.filter(
                        (project) => project.category === option
                    );
                    setProjects1(categories);
                }else{
                    setProjects1(data);
                }
            })
    }, [option]);
    
    return(
        <div className="portfolio__container container" id="portfolio">
            <i class="uil uil-bag portfolio__icon"></i>

            <div className="containerTitle">
                <h3 data-aos="flip-left">Proyectos</h3>
                <h4 ref={titleRef} className="select" onClick={() => setOpen(!open)}>{option}<i class="uil uil-angle-down"></i></h4>
                {
                    open &&  (
                        <div ref={menuRef} className="containerOptions">
                            <ul className="optionsProjects">
                                {Options.map((option) => (
                                    <li onClick={() => {
                                        setOpen(false);
                                        setOption(option)
                                    }} key={option}>
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                }
                
                    
            </div>
            
            <ProjectsList projects1={projects1} option={option}/>
        </div>
    )
}

export default Portfolio;