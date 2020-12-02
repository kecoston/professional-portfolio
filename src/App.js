import React from 'react'
import Navbar from './components/Nav'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="container">
      <div className="content-wrapper">
      <Navbar></Navbar>
    
      <Project></Project>
      </div>
      <Contact className="footer"></Contact>
     
    </div>
  );
}

export default App;
