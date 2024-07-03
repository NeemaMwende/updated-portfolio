
import './App.css';
import Bio from './components/Bio';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
// import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App glitch">
        <Navbar />
          <div className='container'>
            <Bio />
            <Skills />
            <WorkExperience />
            <Projects />
            <ContactMe />
            
          </div>
          <Footer />  
    </div>
  );
}

export default App;