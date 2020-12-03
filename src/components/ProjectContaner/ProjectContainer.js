import react from 'React'
import Project from "../Project/Project"
import API from "../../../utils/API"

function ProjectContainer() {

    const [projects, setProjects] = useState([])
  
    useEffect (() => {
        loadProjects()
    }, [])

    function loadProjects() {
        API.getProjects()
        .then(res => 
            setProjects(res.data) 
        )
        .catch(err => console.log(err))
    };

        {projects.map(project => {
        return (
            <Project 
                key={project._id}>
                name={project.name}
                description={project.description}
                repo={project.repoHref}
                deployed={project.deployedHref}
            </Project>

        
        )
        })
}}


export default ProjectContainer