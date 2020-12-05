import React from 'react'
import Project from "../Project/Project"
import projectList from "../../project.json"
import "./projectcontainer.css"

function ProjectContainer() {



    // mapping through projects to set up display
    const allProjects = projectList.map(project => <Project 
        
        key={project._id}
        name={project.name}
        description={project.description}
        repo={project.repoHref}
        deployed={project.deployedHref}
        />)

    return (
        <div className="wrapper">
        <h1 className="project-header">Projects</h1>
        <div>
            {allProjects}
        </div>
        </div>
    )
}


export default ProjectContainer