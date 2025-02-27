import './App.css';
import {React, Component } from 'react';
import Home from './pages/home/Home/Home';
import Nav from './global_component/Nav';
import Footer from './global_component/Footer';


class App extends Component{

  state ={
   currentPage:"Home"   
  };

render() {
  return (
    <div class="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
 
}
}

export default App;
