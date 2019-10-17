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
       {/* <header>
       <h1> Welcome To Atlantic</h1>
         </header> */}
       
      <Router>
      <AppBar position="static" style={{backgroundColor: "brown"}}>
        <Tabs value="" onChange="" aria-label="simple tabs example" >
        
        <Link to="/" class="link"><Tab label="Home" /></Link>
       {/* <Link to="/"><i class="fas fa-home"></i></Link> */}

          <Link ><Tab label="" /></Link>
          <Link ><Tab label="" /></Link>
          <Link ><Tab label="" /></Link>
         
         
       <h3>Welcome To Atlantic</h3>
          
        </Tabs>
      </AppBar>
      
          <Homepage /> 
      </Router>
    </div>
  );
}

export default App;
