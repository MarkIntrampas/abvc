import React, {Component} from "react";
import './style/loginstyle.css';
import { createClient } from '@supabase/supabase-js';
import logo from "./media/sec1logo.png";

class Login extends Component{

    componentDidMount() {
        this.showlogin(this.props.paneState);

    }

    showlogin(action){
        if(action==="open"){
          document.querySelector("#LoginPane").style.display = 'flex';
        }else{
          document.querySelector("#LoginPane").style.display = 'none';
        }
      
    
      }
      
    
      register(dir){
        if(dir==="go"){
         document.querySelector("#loginContainer").style.display = 'none';
         document.querySelector("#registerFormContainer").style.display = 'flex';
         document.querySelector("#registerFormContainer").style.height = '800px';
        }else{
          document.querySelector("#loginContainer").style.display = 'flex';
          document.querySelector("#registerFormContainer").style.display = 'none';
    
        }
       
      }
    

    render(){

        const supabaseUrl = 'https://whfwipusshyzvlakoejd.supabase.co';
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoZndpcHVzc2h5enZsYWtvZWpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxODMxMTksImV4cCI6MjA1Nzc1OTExOX0.AJibLgp2yoi-mKdPf9IkLmZnGFtypHeQEZIteeCASJA';
        const supabase = createClient(supabaseUrl, supabaseKey);
     
    return(
        <div id="LoginPane" >

  <div  id="loginContainer" class="FormContainer">
     <div id="FormHeader">
        <h1 id="FormHeaderText">LOGIN</h1>
        <img src={logo} alt="logo" id="loginLogo"></img>

     </div>
     
     <div id="LoginFormContainer" class="formContainerBody">

         <div class="loginInputContainer">
           <h1 class="loginLabel">Username:</h1>
           <input class="loginInput"></input>
         </div>

         <div class="loginInputContainer">
           <h1 class="loginLabel">Password:</h1>
           <input class="loginInput"></input>
         </div>

         <div class="loginInputContainer">
        
           <div class="formOptionsContainer">
              <div class="showPasswordCotainer">
                <h1 class="showPasswordText">Show Password</h1>
                <input type="checkbox" class="showPasswordCheckbox"></input>
        

              </div>

              <h1 id="LoginRegister" onClick={()=> this.register("go")} >Register</h1>

           </div>
           <button type="button" class="loginInput" id="LoginButton">LOGIN</button>
         </div>

     </div>


     <div id="FormFooter">
        <h1 id="FormFooterText">© Ale Bosma Ventures Corporation</h1>
        <button id="FormHeaderButton" onClick={()=> this.showlogin('hide')}>CLOSE</button>

     </div>

     
    
  </div>




  <div  id="registerFormContainer" class="FormContainer">
     <div id="FormHeader">
        <h1 id="FormHeaderText">REGISTER</h1>
        <img src={logo} alt="logo" id="loginLogo"></img>

     </div>
     
     <div  class="formContainerBody">

     <div class="loginInputContainer">
           <h1 class="loginLabel">FIRSTNAME:</h1>
           <input class="loginInput"></input>
         </div>

         <div class="loginInputContainer">
           <h1 class="loginLabel">MIDDLE NAME:</h1>
           <input class="loginInput"></input>
         </div>

         <div class="loginInputContainer">
           <h1 class="loginLabel">LAST NAME:</h1>
           <input class="loginInput"></input>
         </div>

         <div class="loginInputContainer">
           <h1 class="loginLabel">USERNAME:</h1>
           <input class="loginInput"></input>
         </div>

         <div class="loginInputContainer">
           <h1 class="loginLabel">PASSWORD:</h1>
           <input class="loginInput"></input>
         </div>

         <div class="loginInputContainer">
           <h1 class="loginLabel">CONFIRM PASSWORD:</h1>
           <input class="loginInput"></input>
         </div>

         <div class="loginInputContainer">
          
           <div class="formOptionsContainer">
              <div class="showPasswordCotainer">
                <h1 class="showPasswordText">Show Password</h1>
                <input type="checkbox" class="showPasswordCheckbox"></input>
        

              </div>

              <h1 id="LoginRegister" onClick={()=> this.register("back")} >LOGIN</h1>

           </div>
           <button type="button" class="loginInput" id="LoginButton">REGISTER</button>
           
         </div>

     </div>


     <div id="FormFooter">
        <h1 id="FormFooterText">© Ale Bosma Ventures Corporation</h1>
        <button id="FormHeaderButton" onClick={()=> this.showlogin('hide')}>CLOSE</button>

     </div>

     
    
  </div>

</div>
    );

    }
}

export default Login;