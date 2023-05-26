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
      color: theme ? "black": "white" ,
      backgroundColor: theme ? "rgb(227,231,235)" : "rgba(25, 33, 46)"  
     }}
      >
      <Navbar />   
      <Home /> 
      <About /> 
    </div>
  );
}

export default App;
