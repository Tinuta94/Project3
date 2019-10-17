import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom'
import Homepage from './components/Homepage.js'
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


function App() {
  return (
    <div className="App">
       
      <Router>
      <AppBar position="static" style={{backgroundColor: "#394053"}}>
        <Tabs value="" onChange="" aria-label="simple tabs example" >
        
        <Link to="/" class="link"><Tab label="Home" /></Link>
    

          <Link ><Tab label="" /></Link>
          <Link ><Tab label="" /></Link>
          <Link ><Tab label="" /></Link>
         
         
       <h1>My Movie World</h1>
          
        </Tabs>
      </AppBar>
      
          <Homepage /> 
      </Router>
    </div>
  );
}

export default App;
