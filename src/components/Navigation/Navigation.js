import React, {Component} from 'react'
import "./navigation.css"

class Navigation extends React.Component {
    render() {
    return (
    <nav>
        <ul>
            <li className="nav-link">
            <a href="gmail.com">ABOUT</a>
            </li>
            <li className="nav-link">
            <a href="gmail.com">WEB DEVELOPMENT</a>
            </li>
            <li className="nav-link">
            <a href="gmail.com">GRAPHIC DESIGN</a>
            </li>
            <li className="nav-link">
            <a href="gmail.com">CONTACT</a>
            </li>
           
        </ul>

    </nav>
   

    )
}
}

export default Navigation