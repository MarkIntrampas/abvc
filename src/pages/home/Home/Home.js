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
           {/*} <h1 id="qoute">Empowering Your Business with Precision and Proficiency</h1>{*/}

         </div>

      </div>

      <div id="sec2">
          <div class="sec2sub">
            <h1 class="mv">OUR MISSION</h1>
            <p class="mvcontext">
            To provide a quality workforce to our clients through the collaborative efforts of our competent employees. 
            The company presents quality and availability for assistance to businesses, and we strive for our valued 
            clients’ satisfaction with our
             operations and commit ourselves to providing outstanding customer service.
            </p>

          </div>
            

          <div class="sec2sub">
            <h1 class="mv">OUR VISION</h1>
            <p class="mvcontext">
            To build outstanding teams with aspirations to achieve its goals, employee
             fulfillment at work, and client satisfaction. By taking this action, we
              assist our European clients who are currently facing challenges in locating skilled employees. 
              The company is committed to hiring skilled individuals
             and providing competent employees to its rapidly expanding workforce.
            </p>
          </div>
      </div>
      
   </div>
    );
}


}

export default Home;