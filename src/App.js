import './App.css';
import {React, Component } from 'react';
import Home from './pages/home/Home/Home';
import Nav from './global_component/Nav';
import Footer from './global_component/Footer';
import Loader from './global_component/loader/Loader'


class App extends Component{

  state ={
   currentPage:"Home"   
  };

  changePage = (newPage) => {
    this.setState({ currentPage: newPage });
  };

 

render() {

  if(this.state.currentPage=="Home"){

  
  return (
    <div class="App">

      <Nav  control={this.changePage}/>
      <Loader />
      <Home />
      <Footer />
    </div>
  );
}else{
  return (
    <div class="App">
  <Nav  control={this.changePage}/>
      <Loader />
  
      <Footer />
    </div>
  );

}


 
}
}

export default App;
