import './App.css';
import {React, Component } from 'react';
import { createClient } from '@supabase/supabase-js';
import Home from './pages/home/Home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Blogs from './pages/blogs/Blog';
import Nav from './global_component/Nav';
import Footer from './global_component/Footer';
import logo from "./pages/home/Home/media/sec1logo.png";




class App extends Component{

  state ={
   currentPage:"Home",
   firstLoad:false 
  };

 

  changePage = (newPage) => {
    this.setState({ currentPage: newPage });
  };

 removeLoader = ()=>{
  
  //document.querySelector("#LoginPane").style.display = 'none';
  if(this.state.firstLoad===true){
 document.querySelector("#LoaderContainer").style.display = 'flex';
  }

  setTimeout(() => {
     
    document.querySelector("#LoaderContainer").style.display = 'none';
      this.state.firstLoad=true;
  }, 2000);
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


  
render() {


  const supabaseUrl = 'https://whfwipusshyzvlakoejd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoZndpcHVzc2h5enZsYWtvZWpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxODMxMTksImV4cCI6MjA1Nzc1OTExOX0.AJibLgp2yoi-mKdPf9IkLmZnGFtypHeQEZIteeCASJA';
const supabase = createClient(supabaseUrl, supabaseKey);

  if(this.state.currentPage==="Home"){

  
  return (
    <div class="App" >
{this.removeLoader()}
      <div id="LoaderContainer">
</div>

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
           <button type="button" class="loginInput" id="LoginButton">REGISTER</button>
           <div class="formOptionsContainer">
              <div class="showPasswordCotainer">
                <h1 class="showPasswordText">Show Password</h1>
                <input type="checkbox" class="showPasswordCheckbox"></input>
        

              </div>

              <h1 id="LoginRegister" onClick={()=> this.register("back")} >LOGIN</h1>

           </div>
         </div>

     </div>


     <div id="FormFooter">
        <h1 id="FormFooterText">© Ale Bosma Ventures Corporation</h1>
        <button id="FormHeaderButton" onClick={()=> this.showlogin('hide')}>CLOSE</button>

     </div>

     
    
  </div>





  




  
  
</div>

      <Nav  control={this.changePage} LoginAction={this.showlogin} />
     
      <Home load={this.removeLoader} />
      <Footer />
    </div>
  );
}else if(this.state.currentPage==="About"){

  return (
    <div class="App" >
{this.removeLoader()}
      <div id="LoaderContainer">
</div>
<div id="LoginPane" onClick={()=> this.showlogin('hide')}>
</div>

      <Nav  control={this.changePage} LoginAction={this.showlogin} />
     
     <About /> 
      <Footer />
    </div>
  );
}else if(this.state.currentPage==="Contact"){

  return (
    <div class="App" >
{this.removeLoader()}
      <div id="LoaderContainer">
</div>

<div id="LoginPane" onClick={()=> this.showlogin('hide')}>
</div>

      <Nav  control={this.changePage} LoginAction={this.showlogin} />
     
     <Contact /> 
      <Footer />
    </div>
  );

  

}  if(this.state.currentPage==="Blogs"){

  
  return (
    <div class="App" >
{this.removeLoader()}
      <div id="LoaderContainer">
</div>

<div id="LoginPane" onClick={()=> this.showlogin('hide')}>
</div>


      <Nav  control={this.changePage} LoginAction={this.showlogin} />
     
      <Blogs load={this.removeLoader} />
      <Footer />
    </div>
  );
}else{
  return (
    <div class="App">
  <div id="LoaderContainer">

</div>

<div id="LoginPane" onClick={()=> this.showlogin('hide')}>
</div>


  <Nav  control={this.changePage}/>
    
      {this.removeLoader()}
      <Footer />
    </div>
  );

}


 
}
}

export default App;
