//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Correct import for Bootstrap JS and Popper.js
//import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js'

import './Nav.css';
import navlogo from "./Nav media/LOGO2.png";
import  Login from '../global_component/Login/Login';
import React, { Component, createRef } from 'react'; 


class Nav extends Component {


  constructor(props) {
    super(props);
    this.LoginRef = React.createRef(); // ← ref for Login component
  }

  state={   
     LoginStatus:false
  };
 
 

  closeDropdown = () => {
    const dropdownMenu = document.querySelector('#navbarNavAltMarkup');
    if (dropdownMenu.classList.contains('show')) {
      dropdownMenu.classList.remove('show');  // Close the dropdown
    }
  };

  action = (Page) => {
    this.LoginRef.current.showlogin("close");
    this.closeDropdown();
    const link = document.querySelectorAll('.nav-link');
    setTimeout(() => {
   
  
      document.querySelector(".Home").classList.remove('current');
      document.querySelector(".About").classList.remove('current');
      document.querySelector(".Blogs").classList.remove('current');
      document.querySelector(".Contact").classList.remove('current');
  
     document.querySelector("."+Page).classList.add('current');
  
    }, 3000);


    this.props.control(""+Page);  
   
  
  };

  login = ()=>{
    this.closeDropdown();
   // this.setState({ loginPaneState: "open" })
    this.LoginRef.current.showlogin("open");

  };
  


  changeLoginStatus = () => {
 
   
    this.props.parent.setState({ loginStatus: true, currentPage: "User-dashboard" });
 
  }

  render() {

  if(this.props.parent.state.loginStatus===false){
    return (
       
      <div id="cont">
        {/* Bootstrap Navbar */}
        <nav className="navbar navbar-expand-md navbar-light nav">
          <a className="navbar-brand brand"  href="#"><img id="logo"src={navlogo}></img></a>
          <button
            className="navbar-toggler btn-clck"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon btn-clck"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <a className="nav-item nav-link current Home" onClick={()=> this.action("Home")} href="#">HOME <span className="sr-only"></span></a>
              <a className="nav-item nav-link About" onClick={()=> this.action("About")} href="#">ABOUT US</a>
              <a className="nav-item nav-link Blogs" onClick={()=> this.action("Blogs")} href="#">BLOGS</a>
              <a className="nav-item nav-link Contact" onClick={()=> this.action("Contact")}  href="#">CONTACTS</a>
              <a className="nav-item nav-link  Login"  onClick={()=>this.login()} href="#">LOGIN</a>
            </div>
          </div>
        </nav>

        <Login ref={this.LoginRef}  loginStatusChanger={this.changeLoginStatus} />
      </div> 
  
    );


  }else{

    return (
       
      <div id="cont">
        {/* Bootstrap Navbar */}
        <nav className="navbar navbar-expand-md navbar-light nav">
          <a className="navbar-brand brand"  href="#"><img id="logo"src={navlogo}></img></a>
          <button
            className="navbar-toggler btn-clck"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon btn-clck"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <a className="nav-item nav-link current Home" onClick={()=> this.action("Home")} href="#">HOME <span className="sr-only"></span></a>
              <a className="nav-item nav-link About" onClick={()=> this.action("About")} href="#">ABOUT US</a>
              <a className="nav-item nav-link Blogs" onClick={()=> this.action("Blogs")} href="#">BLOGS</a>
              <a className="nav-item nav-link Contact" onClick={()=> this.action("Contact")}  href="#">CONTACTS</a>
            </div>
          </div>
        </nav>

        <Login ref={this.LoginRef}  loginStatusChanger={this.changeLoginStatus} />
      </div> 
  
    );

    


  }
  }
}

export default Nav;
