import { useContext } from 'react';
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


  return (
    <div className="App" style={{ 
      color: theme ? "black": "white" ,
      backgroundColor: theme ? "rgb(227,231,235)" : "rgb(53,53,53)"  
     }}
      >
      <Navbar />   
      <Home /> 
      <About />  
      <Skills /> 
      <Project /> 
      <Github />  
      <Contact />  
      
    </div>
  );
}

export default App;
