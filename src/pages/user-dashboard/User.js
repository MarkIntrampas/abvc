
import React, {Component} from "react";
import "./style/User-Dasboard.css";

 


 class User extends Component{

  componentDidMount(){
    document.getElementById("sharedThoughtref").click();
  }

navStatus ="shown";

    asideAction =()=>{
     if(this.navStatus==="shown"){
      document.querySelector(".sidebarContianer").style.width="50px";
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


    showAContent = (ContentName, sidebarRef)=>{

      document.getElementById(ContentName).style.display="flex";
         document.getElementById(sidebarRef).classList.add("activeSideNavItem");



    };

render(){

    return(

        <div class="User-Body">

    <div class="sidebarContianer">
             <aside class="sidebar">
    <div class="logo">
      <i class="fas fa-chart-line"></i>
 
    </div>
    <nav class="nav-menu">
      <a href="#" class="udashnav-item"><i class="udashboard-item fas fa-chart-pie"></i><span>Analytics</span></a>
      <a href="#" class="udashnav-item" id="sharedThoughtref" onClick={()=>{this.showAContent("SharedThoughts","sharedThoughtref")}}><i class="udashboard-item fas fa-user"></i><span>Shared Thoughts</span></a>
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

  <main class="content" id="SharedThoughts">
   



    <div class="sharedThoughts-container">
  <div class="sharedThoughts-emailList">
    <div class="sharedThoughts-emailItemHeader">
      <h4 class="sharedThoughts-emaiHeader"><b>Shared Thoughts</b></h4>
    </div>

    <div class="sharedThoughts-emailItem active">
      <h4 class="sharedThoughts-emailSubject">Sender Name</h4>
      <p class="sharedThoughts-emailSnippet">Email</p>
    </div>
    <div class="sharedThoughts-emailItem">
      <h4 class="sharedThoughts-emailSubject">Sender</h4>
      <p class="sharedThoughts-emailSnippet">Email</p>
    </div>

  </div>

  <div class="sharedThoughts-emailDetail">
    <h2 class="sharedThoughts-detailSubject">Welcome to SharedThoughts</h2>
    <p class="sharedThoughts-detailMeta">From: team@sharedthoughts.app | Date: May 16, 2025</p>
    <div class="sharedThoughts-detailBody">
      <p>Hi there,</p>
      <p>We’re excited to have you on board. Here’s a quick overview...</p>
      
    </div>
  </div>
</div>

  




  </main>







            
        </div>




    );


}

}

export default User;