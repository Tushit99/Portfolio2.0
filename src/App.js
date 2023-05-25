import { useContext } from 'react';
import './App.css';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';
import { ThemeContext } from './context/Contextprovider';

function App() { 
  const { theme } = useContext(ThemeContext);


  return (
    <div className="App" style={{ 
      color: theme ? "black": "white" 
      // backgroundColor: theme ? "white" : "rgb(38,53,80)"  
     }}
      >
      <Navbar />   
      <Home /> 
      <About /> 
    </div>
  );
}

export default App;
