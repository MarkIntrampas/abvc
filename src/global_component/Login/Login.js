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
          this.register("back");
        }
        this.clearLoginForm();
      
    
      }
      
      clearLoginForm= ()=>{
        const usernameLogin = document.getElementById("loginUsername").value="";
        const passwordLogin = document.getElementById("loginPassword").value="";
      }


      clearRegisterForm= ()=>{
        const  FirstnameRegister = document.getElementById("registerFirstname").value;
      const middleNameRegister = document.getElementById("registerMiddlename").value;
      const lastNameRegister = document.getElementById("registerLastname").value;
      const usernameRegister = document.getElementById("registerUsername").value;
      const passwordRegister = document.getElementById("registerPassword").value;
      const confirmpasswordRegister = document.getElementById("registerConfirmPaasword").value;
      



      }



      loginSubmission = async  ( username, password) => {
     
        const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
        const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY; 
        const usernameLogin = document.getElementById("loginUsername").value;
        const passwordLogin = document.getElementById("loginPassword").value;



        const supabase = createClient(supabaseUrl, supabaseKey);
     
        const { data , error } = await supabase.from('Users').select('*').eq('Username',usernameLogin).eq('Password',passwordLogin);

  
        if (error) {
          alert('Error fetching data:', error);
        } else {
        
          //alert(`Fetched ${data.length} rows.`);  // Shows how many rows you got
          if(data.length>0){
            this.showlogin("close");
           alert("welcome "+usernameLogin);
           this.props.loginStatusChanger();
           
          }else{
            alert("Wrong Credentials");
          }
        
        }

        this.clearLoginForm();

    }


    registerSubmission = async ()=>{
      
      const  FirstnameRegister = document.getElementById("registerFirstname").value;
      const middleNameRegister = document.getElementById("registerMiddlename").value;
      const lastNameRegister = document.getElementById("registerLastname").value;
      const usernameRegister = document.getElementById("registerUsername").value;
      const passwordRegister = document.getElementById("registerPassword").value;
      const confirmpasswordRegister = document.getElementById("registerConfirmPaasword").value;
      



      const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
      const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY; 

      const supabase = createClient(supabaseUrl, supabaseKey);

      if(passwordRegister===confirmpasswordRegister){
        const { data , error } =await supabase.from('Users').insert(
        [{
        Username :''+usernameRegister, 
        Password :''+passwordRegister,
        Firstname :''+ FirstnameRegister,
        Middlename:''+ middleNameRegister,
        Lastname: ''+lastNameRegister



        }]);

       if(error){
        alert("Oppss! something went wrong.");
       }else{
        alert("Registered");
             }

       }else{
         alert("Confirmed Password doesn't Match.");
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
           <input class="loginInput" id="loginUsername"></input>
         </div>

         <div class="loginInputContainer">
           <h1 class="loginLabel">Password:</h1>
           <input class="loginInput" id="loginPassword"></input>
         </div>

         <div class="loginInputContainer">
        
           <div class="formOptionsContainer">
              <div class="showPasswordCotainer">
                <h1 class="showPasswordText">Show Password</h1>
                <input type="checkbox" class="showPasswordCheckbox"></input>
        

              </div>

              <h1 id="LoginRegister" onClick={()=> this.register("go")} >Register</h1>

           </div>
           <button type="button" class="loginInput" id="LoginButton" onClick={()=> this.loginSubmission()}>LOGIN</button>
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
           <input class="loginInput" id="registerFirstname"></input>
         </div>

         <div class="loginInputContainer">
           <h1 class="loginLabel">MIDDLE NAME:</h1>
           <input class="loginInput" id="registerMiddlename"></input>
         </div>

         <div class="loginInputContainer">
           <h1 class="loginLabel">LAST NAME:</h1>
           <input class="loginInput" id="registerLastname"></input>
         </div>

         <div class="loginInputContainer">
           <h1 class="loginLabel">USERNAME:</h1>
           <input class="loginInput" id="registerUsername"></input>
         </div>

         <div class="loginInputContainer">
           <h1 class="loginLabel">PASSWORD:</h1>
           <input class="loginInput" id="registerPassword"></input>
         </div>

         <div class="loginInputContainer">
           <h1 class="loginLabel">CONFIRM PASSWORD:</h1>
           <input class="loginInput" id="registerConfirmPaasword"></input>
         </div>

         <div class="loginInputContainer">
          
           <div class="formOptionsContainer">
              <div class="showPasswordCotainer">
                <h1 class="showPasswordText">Show Password</h1>
                <input type="checkbox" class="showPasswordCheckbox"></input>
        

              </div>

              <h1 id="LoginRegister" onClick={()=> this.register("back")} >LOGIN</h1>

           </div>
           <button type="button" class="loginInput" id="LoginButton"onClick={this.registerSubmission}>REGISTER</button>
           
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