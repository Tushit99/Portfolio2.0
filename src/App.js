import { useContext, useRef } from 'react';
import './App.css';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';
import { ThemeContext } from './context/Contextprovider';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';
import Github from './components/Github/Github';
import { Contact } from './components/Contacts/Contacts';

function App() { 
  const { theme } = useContext(ThemeContext);
  let home = useRef();
  let about = useRef();
  let skill = useRef();
  let contact = useRef();
  let project = useRef(); 


  return (
    <div className="App" style={{ 
      color: theme ? "black": "white" ,
      backgroundColor: theme ? "rgb(227,231,235)" : "rgb(53,53,53)"  
     }}
      >
      <Navbar home={home} about={about} skill={skill} contact={contact} project={project} />   
      <Home home={home} /> 
      <About about={about} />  
      <Skills skill={skill} /> 
      <Project project={project} /> 
      <Github />  
      <Contact contact={contact} />  
      
    </div>
  );
}

export default App;
