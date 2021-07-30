import React, {Component} from 'react';

 
class Navigation extends Component{
  render (){
  return (
      <div className = "navegacion">
    <nav >
     <ul>
     <li>
       <button type="button" >
          <h2>Start</h2>
          </button>
    </li>
     <li> 
       <button>
         <h2> Know me</h2>
         </button>
     </li>
     <li> <button type="button">
         <h2> My drawings</h2>
     </button>
     </li>
     
       <li>
         <button>
         <h2>commissions </h2>
       </button>
       </li>
    </ul>
 </nav>      
 </div>
       );
    }
  }
  export default Navigation

