import './App.css';
import {React, Component } from 'react';
import Home from './pages/home/Home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Blogs from './pages/blogs/Blog';
import Nav from './global_component/Nav';
import Footer from './global_component/Footer';
import Login from './global_component/Login/Login';
import UDasboard from './pages/user-dashboard/User';






class App extends Component{


   constructor(props) {
      super(props);
     

    }


  state ={
   currentPage:"Home",
   firstLoad:false,
   loginStatus:false 
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



  
render() {


  if(this.state.currentPage==="Home"){

  
  return (
    <div class="App" >
{this.removeLoader()}
      <div id="LoaderContainer">
</div>



      <Nav  control={this.changePage} LoginAction={this.showlogin}  parent={this} />
     
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


      <Nav  control={this.changePage} LoginAction={this.showlogin} parent={this}/>
     
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



      <Nav  control={this.changePage} LoginAction={this.showlogin} parent={this}/>
     
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





      <Nav  control={this.changePage} LoginAction={this.showlogin}  parent={this}/>
     
      <Blogs load={this.removeLoader} />
      <Footer />
    </div>
  );
}else{
  return (
    <div class="App" >
      
      {this.removeLoader()}

      <div id="LoaderContainer">
      </div>

      <Nav  control={this.changePage} LoginAction={this.showlogin} parent={this} />

      <UDasboard />
     
    </div>
  );

}


 
}
}

export default App;
