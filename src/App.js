import './App.css';
import {React, Component } from 'react';
import Home from './pages/home/Home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Nav from './global_component/Nav';
import Footer from './global_component/Footer';



class App extends Component{

  state ={
   currentPage:"Home"   
  };

 

  changePage = (newPage) => {
    this.setState({ currentPage: newPage });
  };

 removeLoader = ()=>{
  document.querySelector("#LoaderContainer").style.display = 'flex';
  setTimeout(() => {
   
    document.querySelector("#LoaderContainer").style.display = 'none';

  }, 2000);
 }

render() {

  if(this.state.currentPage=="Home"){

  
  return (
    <div class="App" >
{this.removeLoader()}
      <div id="LoaderContainer">
</div>
      <Nav  control={this.changePage}/>
     
      <Home load={this.removeLoader} />
      <Footer />
    </div>
  );
}else if(this.state.currentPage=="About"){

  return (
    <div class="App" >
{this.removeLoader()}
      <div id="LoaderContainer">
</div>
      <Nav  control={this.changePage}/>
     
      <About load={this.removeLoader} />
      <Footer />
    </div>
  );

}else if(this.state.currentPage=="Contact"){

  return (
    <div class="App" >
{this.removeLoader()}
      <div id="LoaderContainer">
</div>
      <Nav  control={this.changePage}/>
     
      <Contact load={this.removeLoader}/>
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
