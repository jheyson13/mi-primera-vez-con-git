import React, { Component} from 'react';
import logo from './img/background.png'
import './App.css'; 
import  Navigation from './components/Navigation';
  class App extends Component{
    render() {
      return( 
        <div className = "App"> 
          <header className = "App-header">  
           <h1 className = "App-title"> Welcome to my website</h1>
            <img src={logo} className= "App-logo" alt= "logo" />
          </header>
          <Navigation  />
        </div>
      );
    }
  }
  
export default App;

