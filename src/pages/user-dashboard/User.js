
import React, {Component} from "react";
import "./style/User-Dasboard.css";

 


 class User extends Component{
navStatus ="shown";

    asideAction =()=>{
     if(this.navStatus==="shown"){
      document.querySelector(".sidebarContianer").style.width="fit-content";
       document.querySelector(".sidebar").style.width="0";
        document.querySelector("#sidebarHider").innerHTML="⯮";
        this.navStatus="hidden";
     }else{
       document.querySelector(".sidebarContianer").style.width="250px";
       document.querySelector(".sidebar").style.width="250px";
        document.querySelector("#sidebarHider").innerHTML="⯬";
        this.navStatus="shown";

     }

    };

render(){

    return(

        <div class="User-Body">

    <div class="sidebarContianer">
             <aside class="sidebar">
    <div class="logo">
      <i class="fas fa-chart-line"></i>
      <span>MyDashboard</span>
    </div>
    <nav class="nav-menu">
      <a href="#" class="udashnav-item"><i class="fas fa-home"></i><span>Home</span></a>
      <a href="#" class="udashnav-item"><i class="udashboard-item fas fa-user"></i><span>Profile</span></a>
      <a href="#" class="udashnav-item"><i class="udashboard-item fas fa-chart-pie"></i><span>Analytics</span></a>
      <a href="#" class="udashnav-item"><i class="udashboard-item fas fa-cog"></i><span>Settings</span></a>
      <a href="#" class="udashnav-item"><i class="udashboard-item fas fa-sign-out-alt"></i><span>Logout</span></a>
    </nav>
  </aside>
   <div id="sideNavBtnContainer">
      
       <button id="sidebarHider" onClick={this.asideAction}>
        ⯬
       </button>

   </div>
  </div>

  <main class="content">
    <h1>Welcome to the Dashboard</h1>
    <p>This is your main content area.</p>
  </main>







            
        </div>




    );


}

}

export default User;