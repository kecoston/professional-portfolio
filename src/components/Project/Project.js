import React, {Component} from 'react'
import "./project.css"

class Project extends React.Component {



    render () {
        return (
            <div className="media row">
                
                <div className="container col-sm-2">
                <img src="./assets/images/texture-turquoise.png" className="align-self-center mr-3" alt="project1"></img>
                <div className="centered">Moodhi</div>
                </div>

                <div className="media-body col-sm-6">
                    <h5 className="mt-0">Center-alined media</h5>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante 
                        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. 
                        Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis 
                        in faucibus.</p>

                <button className="btn btn-secondary btn-sm">GitHub Repository</button>
                <button className="btn btn-secondary btn-sm">Deployed Link</button>

                </div>
            
            </div>
        )
    }
        
}

export default Project 