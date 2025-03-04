import './App.css';
import {React, Component } from 'react';
import Home from './pages/home/Home/Home';
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
  setTimeout(() => {
   
    document.querySelector("#LoaderContainer").style.display = 'none';

  }, 3000);
 }

render() {

  if(this.state.currentPage=="Home"){

  
  return (
    <div class="App" >
{this.removeLoader()}
      <div id="LoaderContainer">
</div>
      <Nav  control={this.changePage}/>
     
      <Home />
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
