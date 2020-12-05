import React from 'react'
import "./about.css"

function About () {
    return (
        <div className="about-container">
        <div className="portrait">
            <img src="/assets/images/katie-portrait.jpg" />
        </div>
        <div className="aboutMe col-md-8">
        <h1 className="about-h">Hey!</h1>
        <p className="about-p">Kathryn's skills as a professional have evolved over the last ten years, mainly focusing on website design and development, and digital marketing. She has primarily worked as an independent, in-house designer in a team environment. Through experience, Kathryn has developed fantastic project management skills and an acumen for positively analyzing the teams’ work product and improving effectiveness by introducing best practices. Over the last several months, Kathryn has completed the UT Full Stack Coding Bootcamp. Her favorite part of being a web developer is working step by step through a project: researching the user's needs and experience, brainstorming solutions, seeing the project come to fruition, and performing to get the desired results. Kathryn is looking for a full-time position working as a web developer where she applies her past professional experience and continues to grow as a developer. </p>
        </div>
        </div>
    )
}

export default About