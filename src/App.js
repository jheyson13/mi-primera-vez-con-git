import React, { Component} from 'react';
import logo from './assets/img/background.png'
import './assets/css/App.css'; 
import  Navigation from './components/Navigation';
import BotonSend from './components/BotonSend';
import Informacion from './components/Informacion';
import Links from './components/Links'
import Texto from './components/Texto';
  class App extends Component{
    render() {
      return( 
        <div className = "App"> 
          <header className = "App-header">  
           <h1 className = "App-title"> 
            Welcome to my website
           </h1>
            <img src={logo} className= "App-logo" alt= "logo" />
            <p>
              <Informacion />
            </p>
           
          </header>
             <Navigation  />
           <section className="componentes">
             <BotonSend />
            
             </section>
             <section className=" enlaces">  
            <p><Links /></p>
             <div className="contenido"> 
                 <Texto />
               </div>
            </section>                
        </div>
           
             
      );
    }
  }
  
export default App;


