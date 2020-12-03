import React from 'react'
import ProjectContainer from './components/ProjectContaner/ProjectContainer'
import Contact from './components/Contact/Contact'
import Jumbotron from "./components/Jumbotron/Jumbotron"


function App() {
  return (
    <div className="container">
      <div className="content-wrapper">

      <Jumbotron></Jumbotron>
      <ProjectContainer></ProjectContainer>
      
      </div>

      <Contact></Contact>
     
    </div>
  );
}

export default App;
