import {React, Component} from 'react';
import './Footer.css';
import './Footer-smaller.css';
import FooterLogo from './footerLogo.png';


class Footer extends Component{

    render() {
    return(
     <div id="Footercontainer">
      <div class="footerCol">
        <img src={FooterLogo} id="FooterLogo"></img>
        <div id="Col1Sub">
          <h1 id="ColSubText">CONTACT US</h1>
          <ul>
             <li>LinkendIn</li>
             <li>ale@alebosmaventurescorp.com</li>
             <li>Facebook</li>
          </ul>

        </div>
      </div>
      <div class="footerCol">
        
      </div>
      <div class="footerCol">
     <h1 id="copy">© Ale Bosma Ventures Corporation</h1>
      </div>


     </div>
    );
  }

}

export default Footer;  