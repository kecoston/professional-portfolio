import React, { useEffect, useState } from 'react'
import Project from "../Project/Project"
import API from "../../utils/API"

function ProjectContainer() {

    // Setting component's inital state
    const [projects, setProjects] = useState([])

    // Load all projects and store them with setProjects
    useEffect(() => {
        loadProjects()
    }, [])

    // Loads all projects and sets them as projects
    function loadProjects() {
        API.getProjects()
            .then(res =>
                setProjects(res.data)
            )
            .catch(err => console.log(err))
    };

    // mapping through projects to set up display
    const projectList = projects.map(project => <Project 
        
        key={project._id}
        name={project.name}
        description={project.description}
        repo={project.repoHref}
        deployed={project.deployedHref}
        />)

    return (
        <div>
            {projectList}
        </div>
    )
}


export default ProjectContainer