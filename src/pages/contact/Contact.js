import {React, Component} from 'react';
import './style/ContactStyle.css';
import './style/ContactStyle-smalll.css';
import { createClient } from '@supabase/supabase-js';

class Contact extends  Component{



    submitSharedThoughts = async ()=>{
    

        alert("Submit Shared Thought");


        const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
        const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY; 
        
        const email = document.querySelector("#shareThoughtEmail").value;
        const name = document.querySelector("#shareThoughtName").value;
        const Message = document.querySelector("#ContactTextBox").value;

              const supabase = createClient(supabaseUrl, supabaseKey);
        
            
                const { error } = await supabase.from('Shared_Thoughts').insert(
                [{
                Email :''+email,
                Name:''+name,
                Message:''+Message
        
        
                }]);
        
               if(error){
                alert("Oppss! something went wrong.");
               }else{
          document.querySelector("#shareThoughtEmail").value="";
          document.querySelector("#shareThoughtName").value="";
          document.querySelector("#ContactTextBox").value="";
                alert("Sent");
            
                     }
        
    };



    render(){
        return(
        <div id="ContactCon">
         <div id="ContactSec1">
                <h1 id="AbtSec1Title">CONTACT US</h1>
         </div>

          <div id="ContactSec2">
           <div class="ContactSec2Sub">
            <h1 class="ContactSubText">SHARE YOUR THOUGHTS.</h1>
             <div id="contactForm">]
                <div class="inputContainer">
                    <h1 class="formLabels">Name:</h1>
                    <input class="contactInput" id="shareThoughtName" type="text"></input>
                </div>

                <div class="inputContainer">
                    <h1 class="formLabels" for="Email">Email:</h1>
                    <input class="contactInput" type="text" name="Email" id="shareThoughtEmail"></input>
                </div>

                <div class="inputContainer">
                    <h1 class="formLabels">Message:</h1>
                    <textarea class="contactInput" id="ContactTextBox"type="text-area" rows="4" cols="50" placeholder="Message" ></textarea>
                </div>

                <div class="inputContainer">
                    
                    <input class="contactInput" id="ContactSubmitButton" type="button" value="SUBMIT" onClick={this.submitSharedThoughts}></input>
                </div>


                 
                   
             </div>
           </div>
           
            <div class="ContactSec2Sub">
            <h1 class="ContactSubText">Contact</h1>
                <div id="Contactlink">
                    <h1 class="ContactSubText ContactLinkItem">LinkedIn</h1>
                    <h1 class="ContactSubText ContactLinkItem">ale@alebosmaventurescorp.com</h1>
                    <h1 class="ContactSubText ContactLinkItem">Facebook</h1>
                </div>
            
            <h1 class="ContactSubText">Visit Us</h1>
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