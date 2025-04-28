import './App.css';
import {React, Component } from 'react';
import Home from './pages/home/Home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Blogs from './pages/blogs/Blog';
import Nav from './global_component/Nav';
import Footer from './global_component/Footer';
import Login from './global_component/Login/Login';






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



  
render() {


  if(this.state.currentPage==="Home"){

  
  return (
    <div class="App" >
{this.removeLoader()}
      <div id="LoaderContainer">
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



  <Nav  control={this.changePage}/>
    
      {this.removeLoader()}
      <Footer />
    </div>
  );

}


 
}
}

export default App;
