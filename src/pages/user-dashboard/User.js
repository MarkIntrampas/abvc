
import React, {Component} from "react";
import "./style/User-Dasboard.css";
import { createClient } from '@supabase/supabase-js';

 


 class User extends Component{
 

  fetched=false;
 

 constructor(props) {
    super(props);
     
  }


   

     
 
     componentDidMount() {
  if (this._hasMounted) return;
  this._hasMounted = true;

  document.querySelector(".sharedThoughts-emailList").innerHTML = '';
           document.getElementById("sharedThoughtref").click();
}
   
  

  componentDidUnmount(){
      document.querySelector(".sharedThoughts-emailList").innerHTML=''; 

  }

 
  





  handleEmailClick = (event) => {
 const clickedElement = event.currentTarget;

  
  const email = clickedElement.getAttribute('thoughtId');
  this.MailDisplay(email);


};




MailDisplay = async (id) =>{

  



     const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
            const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY; 
            
    
    
    
            const supabase = createClient(supabaseUrl, supabaseKey);
         
            const { data , error } = await supabase.from('Shared_Thoughts').select('*').eq("id",id);
    
      
            if (error) {
              alert('Error fetching data:', error);
            } else {   
                   data.map( m =>{

                      //NAME
                    document.querySelector(".sharedThoughts-detailSubject").innerHTML=m.Name;
                    //EMAIL
                    document.querySelector(".sharedThoughts-detailMeta").innerHTML=m.Email;
                    //MESSAGE
                    document.querySelector(".sharedThoughts-detailBody").innerHTML=m.Message;

                   });
                  





            }


}

  fetchThoughts = async ()=>{


       

      if(this.fetched===false){
            document.querySelector(".sharedThoughts-emailList").innerHTML=''; 
  
            const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
            const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY; 
            
    
    
    
            const supabase = createClient(supabaseUrl, supabaseKey);
         
            const { data , error } = await supabase.from('Shared_Thoughts').select('*').order('id', { ascending: false });
    
      
            if (error) {
              alert('Error fetching data:', error);
            } else {
            
            let t=false;
            
               data.map(item =>{
         
            
           

               if(t===false){
     
                  
              const container = document.querySelector(".sharedThoughts-emailList");
  



              // Create the main div element
              const emailItem = document.createElement('div');
              emailItem.className = 'sharedThoughts-emailItem';
              emailItem.setAttribute('thoughtId',item.id);
              emailItem.onclick = this.handleEmailClick;

              // Create the h4 element for the sender name
              const emailSubject = document.createElement('h4');
              emailSubject.className = 'sharedThoughts-emailSubject';
              emailSubject.textContent = item.Name;

              // Create the p element for the email snippet
              const emailSnippet = document.createElement('p');
              emailSnippet.className = 'sharedThoughts-emailSnippet';
              emailSnippet.textContent = item.Email;

              // Append the h4 and p elements to the main div
              emailItem.appendChild(emailSubject);
              emailItem.appendChild(emailSnippet);

              // Optionally, append the whole structure to the document body or another container
              container.appendChild(emailItem); // Or replace `document.body` with a specific container

               return true;

               t=true;
               }

               });
             
              this.setState({ThoughtFetched:true});
              this.fetched=true;
              
            }
             
            
          }
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
          this.fetchThoughts();



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
   
<div class="sharedThoughts-emailItemHeader">
      <h4 class="sharedThoughts-emaiHeader"><b>Shared Thoughts</b></h4>
    </div>


    <div class="sharedThoughts-container">

    
  <div class="sharedThoughts-emailList">
    

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