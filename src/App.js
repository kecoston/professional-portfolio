import React from 'react'
import Navigation from './components/Navigation/Navigation'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import Jumbotron from "./components/Jumbotron/Jumbotron"


function App() {
  return (
    <div className="container">
      <div className="content-wrapper">

      <Jumbotron></Jumbotron>
      <Navigation></Navigation>
    
      <Project></Project>
      </div>
      <Contact className="footer"></Contact>
     
    </div>
  );
}

export default App;
