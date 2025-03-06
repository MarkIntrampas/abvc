import {React, Component} from 'react';
import './style/ContactStyle.css';

class Contact extends  Component{


    render(){
        return(
        <div id="ContactCon">
         <div id="ContactSec1">
                <h1 id="AbtSec1Title">CONTACT US</h1>
         </div>

          <div id="ContactSec2">
           <div class="ContactSec2Sub">
           </div>
           
            <div class="ContactSec2Sub">
                <iframe id='map' loading="lazy"
					src="https://maps.google.com/maps?q=ALE%20BOSMA&#038;t=m&#038;z=10&#038;output=embed&#038;iwloc=near"
					title="ALE BOSMA"
					aria-label="ALE BOSMA"
			        ></iframe>
            </div>

       
         </div>
         </div>


        );
    }

}

export default Contact;