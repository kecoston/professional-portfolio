import React from 'react'
import Navigation from './components/Navigation/Navigation'
import ProjectContainer from './components/ProjectContaner/ProjectContainer'
import Contact from './components/Contact/Contact'
import Jumbotron from "./components/Jumbotron/Jumbotron"


function App() {
  return (
    <div className="container">
      <div className="content-wrapper">

      <Jumbotron></Jumbotron>
      <Navigation></Navigation>
    
      <ProjectContainer></ProjectContainer>
      </div>
      <Contact className="footer"></Contact>
     
    </div>
  );
}

export default App;
