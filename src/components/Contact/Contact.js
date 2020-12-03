import React, {Component} from 'react'
import "./contact.css"



class Contact extends React.Component {
    render () {
        return (

            <div className="container contact-background">
               <ul> 
                <li id="contact-layer">Contact</li>
                <li>Email: kecoston@gmail.com</li>
                <li><a target="_blank" href="https://www.linkedin.com/in/costonkatie/">Linkedin: kecoston</a></li>
                <li><a target="_blank" href="https://github.com/kecoston">Github: kecoston</a></li>
            </ul>
            </div>


        )
    }
}

export default Contact
