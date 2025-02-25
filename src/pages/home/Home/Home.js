import {React, Component} from "react";
import './style/home.css';
import logo from './media/sec1logo.png';

class Home extends Component{


render(){
    return(
   <div id="container">
      <div id="sec1">
        <div id="logoCon">
          <img  id ="sec1logo" src={logo}></img>
        </div>
        
         <div id="sec1sub">
            <h1 id="companyName"> ALE BOSMA VENTURES CORPORTION</h1>
            <h1 id="qoute">Empowering Your Business with Precision and Proficiency</h1>

         </div>

      </div>
   </div>
    );
}


}

export default Home;