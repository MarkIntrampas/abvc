import {React, Component} from 'react';
import './style/Aboutstyle.css';
import './style/Aboutstyle-small.css';
import sample from './media/abtsec1.jpg';

class About extends Component{



    componentDidMount() {
        this.btn2();    
      }
     hideAll=()=>{
        const detailElements = document.querySelectorAll('.detail');
      
      
      detailElements.forEach(element => {
        element.style.display = 'none';
          element.style.opacity = '0';
           element.style.visibility = 'hidden';
      });
    
      }


reset=()=>{
    let c1="#E91F68";
    let c2="white";
    
  



 const detailElements = document.querySelectorAll(' .Timelinebutton');


detailElements.forEach(element => {
    

element.style.backgroundColor=c2;

element.style.border="2px solid "+c1;

element.style.color=c1;
element.style.animationName="none";

});

 

this.hideAll();
this.resetArrow();
}

resetArrow = ()=>{

    const detailElements = document.querySelectorAll('.arrow');
   
   
    detailElements.forEach(element => {
      
      element.style.marginLeft="25px";
    element.style.paddingLeft="0px";
    
    element.style.opacity="0";
      
      
    });
        
        
    
    
}

btn1=()=>{
this.reset();

document.getElementById("bar").style.height="1%";
        
   document.getElementById("btn1").style.color="white";
   
   document.getElementById("btn1").style.backgroundColor="#E91F68";
   
   
   document.getElementById("btn1").style.border="2px solid white";
   
   document.getElementById("btn1").classList.add("TimelinebuttonActive");
   document.getElementById("btn1").style.animationName="blink";
    
   
   document.getElementById("d1").style.display="flex";
   
   
   document.getElementById("d1").style.opacity="1";
   
   document.getElementById("d1").style.visibility="visible";
   document.getElementById("d1").style.visibility="visible";
   
   
   
   document.getElementById("span1").style.marginLeft="53px";
   document.getElementById("span1").style.paddingLeft="10px";
   
   document.getElementById("span1").style.opacity="1";
   
};

btn2=()=>{
    this.reset();
    document.getElementById("bar").style.height="25%";
    for(let i=1; i<=2; i++){     
         document.getElementById("btn"+i).style.color="white";
    
    document.getElementById("btn"+i).style.backgroundColor="#E91F68";
    
    
    document.getElementById("btn"+i).style.border="2px solid white";
    
    }
    document.getElementById("btn2").classList.add("TimelinebuttonActive");
    document.getElementById("btn2").style.animationName="blink";
    
    document.getElementById("d2").style.display="flex";
    
    document.getElementById("d2").style.opacity="1";
    
    document.getElementById("d2").style.visibility="visible";
    
    
    document.getElementById("span2").style.marginLeft="53px";
    document.getElementById("span2").style.paddingLeft="10px";
    
    document.getElementById("span2").style.opacity="1";
    
};


btn3=()=>{
    this.reset();
    document.getElementById("bar").style.height="50%";
        
        
    for(let i=1; i<=3; i++){     
      document.getElementById("btn"+i).style.color="white";
 
 document.getElementById("btn"+i).style.backgroundColor="#E91F68";
 
 
 document.getElementById("btn"+i).style.border="2px solid white";
 
 
 
 document.getElementById("span3").style.marginLeft="53px";
 document.getElementById("span3").style.paddingLeft="10px";
 
 document.getElementById("span3").style.opacity="1";
 
 
 }
 document.getElementById("btn3").classList.add("TimelinebuttonActive");
 document.getElementById("btn3").style.animationName="blink";
 
 
 
 document.getElementById("d3").style.display="flex";
 
 document.getElementById("d3").style.opacity="100%";
 
 document.getElementById("d3").style.visibility="visible";
      
}


btn4=()=>{
    this.reset();

    document.getElementById("bar").style.height="75%";
      
      
      
    for(let i=1; i<=4; i++){     
      document.getElementById("btn"+i).style.color="white";
 
 document.getElementById("btn"+i).style.backgroundColor="#E91F68";
 
 
 document.getElementById("btn"+i).style.border="2px solid white";
 
 }
 document.getElementById("btn4").classList.add("TimelinebuttonActive");
 document.getElementById("btn4").style.animationName="blink";
 
 
 document.getElementById("d4").style.display="flex";
 
 document.getElementById("d4").style.opacity="1";
 
 document.getElementById("d4").style.visibility="visible";
 
 
 document.getElementById("span4").style.marginLeft="53px";
 document.getElementById("span4").style.paddingLeft="10px";
 
 document.getElementById("span4").style.opacity="1";
 
};

btn5=()=>{
    this.reset();
    document.getElementById("bar").style.height="98%";
        
    for(let i=1; i<=5; i++){     
         document.getElementById("btn"+i).style.color="white";
    
    document.getElementById("btn"+i).style.backgroundColor="#E91F68";
    
    
    document.getElementById("btn"+i).style.border="2px solid white";
    
    }
    document.getElementById("btn5").classList.add("TimelinebuttonActive");
    document.getElementById("btn5").style.animationName="blink";
    
    
    
    document.getElementById("d5").style.display="flex";
    
    document.getElementById("d5").style.opacity="1";
    
    document.getElementById("d5").style.visibility="visible";
    
    
    document.getElementById("span5").style.marginLeft="53px";
    document.getElementById("span5").style.paddingLeft="10px";
    
    document.getElementById("span5").style.opacity="1";
};









render(){


return(
<div id="AbtCon">
   <div id="AboutSec1">
     <h1 id="AbtSec1Title">ABOUT US</h1>
   </div>

<div id="sec2">
<div class="sec2sub">
  <h1 class="mv">OUR MISSION</h1>
  <p class="mvcontext">
  To provide a quality workforce to our clients through the collaborative efforts of our competent employees. 
  The company presents quality and availability for assistance to businesses, and we strive for our valued 
  clients’ satisfaction with our
   operations and commit ourselves to providing outstanding customer service.
  </p>

</div>
  

<div class="sec2sub">
  <h1 class="mv">OUR VISION</h1>
  <p class="mvcontext">
  To build outstanding teams with aspirations to achieve its goals, employee
   fulfillment at work, and client satisfaction. By taking this action, we
    assist our European clients who are currently facing challenges in locating skilled employees. 
    The company is committed to hiring skilled individuals
   and providing competent employees to its rapidly expanding workforce.
  </p>
        </div>
        </div>

    <div id="AboutSec3">
     <h1 id="AbtSec1Title">MAJOR MILESTONES</h1>


                <div class="timeline">

                    <div id="barContainer">
                        
                        <div id="bar"> 
                            
                        <div id="buttons">
                    <button id="btn1" class="Timelinebutton" onClick={()=>this.btn1()}>B<span class="arrow" id="span1">⇒</span></button>
                <button id="btn2" class="Timelinebutton" onClick={()=>{this.btn2()}}>B<span class="arrow" id="span2">⇒</span></button>
                <button id="btn3" class="Timelinebutton" onClick={()=>{this.btn3()}}>B<span class="arrow" id="span3">⇒</span></button>
                <button id="btn4" class="Timelinebutton" onClick={()=>{this.btn4()}}>B<span class="arrow" id="span4">⇒</span></button>
                <button id="btn5" class="Timelinebutton" onClick={()=>{this.btn5()}}>B<span class="arrow" id="span5">⇒</span></button>      
                        </div>
                       
                        </div>
                                
                    </div>
                    
                <div id="detailsContainter">
                    
                <div class="detail" id="d1">
                
                <div class="sub sub2">  
                    <img decoding="async" class="Timelineimg" src={sample}></img>
                </div>
                
                    <div class="sub sub1">
                        <h1 class="storyTitle">From Idea to Reality</h1>  

                
                    <p class="story">
                    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    </p>
                        
                    </div> 
                
                
                </div>


                <div class="detail" id="d2">
                    
                    <div class="sub sub1">
                        <h1 class="storyTitle">Scaling and Struggle</h1>  
                        
                        <p class="story">
                    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    </p>
                        
                    </div> 
                
                <div class="sub sub2">  
                    <img decoding="async" class="Timelineimg" src={sample}></img>
                </div>
                    
                </div>



                <div class="detail" id="d3">   
                    
                
                <div class="sub sub2">  
                    <img decoding="async"  class="Timelineimg" src={sample}></img>
                </div>
                
                <div class="sub sub1">
                        <h1 class="storyTitle">Partnerships and Progress</h1>  
                        <p class="story">
                    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    </p>
                        
                    </div> 
                    
                </div>




                <div class="detail" id="d4">
                    
                    
                    <div class="sub sub1">
                    <h1 class="storyTitle">Reflections and Future</h1> 
                        <p class="story">
                    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    </p>
                        
                    </div> 
                
                <div class="sub sub2">  
                    <img decoding="async" class="Timelineimg" src={sample}></img>
                </div>
                    
                </div>




                <div class="detail" id="d5">
                    
                
                <div class="sub sub2">  
                    <img decoding="async"  class="Timelineimg" src={sample}></img>
                </div>
                
                
                    <div class="sub sub1">
                        <h1 class="storyTitle">PRESENT</h1>
                        <p class="story">
                    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    </p>
                        
                    </div> 
            </div>
        </div>
    </div>
 </div>

 {/*}
 <div id="AboutSec4">
  <div id="Teambody"> 
   <div id="org-chart">
    <div class="org-container">
    
      <div class="org-node">
          <img decoding="async" src="http://localhost/p/wp-content/uploads/2023/11/Ale-new.png" class="org-image"></img>
        <span class="name">CEO</span>
        <span>Chief Executive Officer</span>
      </div>
     
      <div class="department">
        <div class="sub-department org-node">
           <img decoding="async" src="" class="org-image"></img>
           <span class="name">CEO</span>
          <span>Management</span>
        </div>
      </div>
       <div class="department">
          <div class="sub-department org-node">
          <img decoding="async" src="" class="org-image"></img>
           <span class="name">CEO</span>
          <span>Human Resources</span>
        </div>
         <div class="sub-department org-node">
          <img decoding="async" src="" class="org-image"></img>
           <span class="name">CEO</span>
          <span>Human Resources</span>
        </div>
        <div class="sub-department org-node">
          <img decoding="async" src="" class="org-image"></img>
           <span class="name">CEO</span>
          <span>Public Relations</span>
        </div>
       </div>
        
     
      <div class="department">
        <div class="sub-department org-node">
          Department 1
          <span>10 People</span>
          
          <div class="org-node">Employee 1</div>
          <div class="org-node">Employee 2</div>
          <div class="org-node">Employee 3</div>
          <div class="org-node">Employee 4</div>
          <div class="org-node">Employee 5</div>
          <div class="org-node">Employee 6</div>
          <div class="org-node">Employee 7</div>
          <div class="org-node">Employee 8</div>
          <div class="org-node">Employee 9</div>
          <div class="org-node">Employee 10</div>
        </div>
        <div class="sub-department org-node">
          Department 2
          <span>10 People</span>
          
          <div class="org-node">Employee 1</div>
          <div class="org-node">Employee 2</div>
          <div class="org-node">Employee 3</div>
          <div class="org-node">Employee 4</div>
          <div class="org-node">Employee 5</div>
          <div class="org-node">Employee 6</div>
          <div class="org-node">Employee 7</div>
          <div class="org-node">Employee 8</div>
          <div class="org-node">Employee 9</div>
          <div class="org-node">Employee 10</div>
        </div>
        <div class="sub-department org-node">
          Department 3
          <span>10 People</span>
         
          <div class="org-node">Employee 1</div>
          <div class="org-node">Employee 2</div>
          <div class="org-node">Employee 3</div>
          <div class="org-node">Employee 4</div>
          <div class="org-node">Employee 5</div>
          <div class="org-node">Employee 6</div>
          <div class="org-node">Employee 7</div>
          <div class="org-node">Employee 8</div>
          <div class="org-node">Employee 9</div>
          <div class="org-node">Employee 10</div>
        </div>
        <div class="sub-department org-node">
          Department 4
          <span>10 People</span>
       
          <div class="org-node">Employee 1</div>
          <div class="org-node">Employee 2</div>
          <div class="org-node">Employee 3</div>
          <div class="org-node">Employee 4</div>
          <div class="org-node">Employee 5</div>
          <div class="org-node">Employee 6</div>
          <div class="org-node">Employee 7</div>
          <div class="org-node">Employee 8</div>
          <div class="org-node">Employee 9</div>
          <div class="org-node">Employee 10</div>
        </div>
        <div class="sub-department org-node">
          Department 5
          <span>10 People</span>
         
          <div class="org-node">Employee 1</div>
          <div class="org-node">Employee 2</div>
          <div class="org-node">Employee 3</div>
          <div class="org-node">Employee 4</div>
          <div class="org-node">Employee 5</div>
          <div class="org-node">Employee 6</div>
          <div class="org-node">Employee 7</div>
          <div class="org-node">Employee 8</div>
          <div class="org-node">Employee 9</div>
          <div class="org-node">Employee 10</div>
        </div>
      </div>
    </div>
  </div>
  </div>
 
</div>

{*/}


</div>  


);

}

}

export default About;