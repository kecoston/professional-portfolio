import React from 'react'
import "./project.css"

function Project (props) {

   
        return (
            <div className="media row">
                
                <div className="container col-sm-2">
                <img src="./assets/images/texture-turquoise.png" className="align-self-center mr-3" alt={props.name}></img>
                <div className="centered">{props.name}</div>
                </div>

                <div className="media-body col-sm-6">
                    <h5 className="mt-0">{props.name}</h5>
                    <p>{props.description}</p>

                <a href={props.repo} className="btn btn-secondary btn-sm" role="button">GitHub Repository</a>
                <a href={props.deployed} className="btn btn-secondary btn-sm" role="button">Deployed Link</a>
                </div>
            
            </div>
        )

        
}

export default Project 