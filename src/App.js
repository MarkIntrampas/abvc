import './App.css';
import {React, Component } from 'react';
import Home from './pages/home/Home/Home';
import Nav from './global_component/Nav';


class App extends Component{

  state ={
   currentPage:"Home"   
  };

render() {
  return (
    <div class="App">
      <Nav />
      <Home />
      <h1>hi</h1>
    </div>
  );
 
}
}

export default App;
