import { Component } from "react";
import './style/Blogstyle.css'; 
import './style/Blogstyle-smaller.css';
import sample from './media/abtsec1.jpg';



class Blogs extends Component{
   link = "https://whfwipusshyzvlakoejd.supabase.co/storage/v1/object/sign/media/sample.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtZWRpYS9zYW1wbGUucG5nIiwiaWF0IjoxNzQyMjc1ODc5LCJleHAiOjE3NzM4MTE4Nzl9.buURNnBln18J1WvWhuHigfdqJevMAqPFjL6s7VUznW0";
   link2 = "media/abtsec1.jpg";
   render(){
     return(
       <div id="BlogContainer">

        

          <div id="BlogSec1">

               
              <div id="featuredBlog">
                 
                  <div id="featuredBlogBody">
                    
                        <h1 id="featuredBlogTitle">BLOG TITLE</h1>


                        <div id="featuredBlogBodyContent">
                          <div id="blogAutContainer">
                               <h1 id="blogAut">Author</h1>
                          </div>
                          <div id="blogSubTitleContainer">
                            <h1 id="blogSubTitle">
                            Sub title: Lorem   eyJ1cmwiOiJtZWRpYS9zYW1wbGUucG5nIiwiaWF0IjoxNzQyMjc1ODc5LCJleHAiOjE3NzM4MTE4Nzl9
                              </h1>

                          </div>

                         
                        </div>


                        
                        <div id="featuredBlogAction">
                          <div id="actionTextContainer">
                            <div id="blogActionText">
                              <h1 id="actionText">
                                Headlines Sample Text. small details about the featured blog.
                                Headlines Sample Text. small details about the featured blog.
                              </h1>

                            </div>
                            <button id="blogActionButton">
                              Show more
                            </button>
                            
                          </div>
                        </div>
                        
                  </div>
                  <img  src={sample}  class="blogiItemImage" alt="featured"></img>

                </div>

             
          </div>
            
            <div id="BlogSec2">
                <div id="BlogToggle">
                  <h1>Latest Posts</h1>
                    <div id="BlogButtonContainer">
                      <button class="BlogToggleButtons">MILESTONE</button>
                      <button class="BlogToggleButtons">EVENTS</button>
                      <button class="BlogToggleButtons">LATEST</button>
                    </div>

                   

                </div>

                <div id ="BlogItemContainer">
                  <div class="item">
                    <img src={sample} alt="featured" class="blogItemImage"></img>
                    <div class="blogItemAuthorContainer">

                       <img src={sample} alt="featured" class="blogItemAuthorImage"></img>
                       <h1 class="blogItemAuthorName">Author Name</h1>
                    </div>
                    <div class="blogItemBodyContainer">
                       <h1 class="blogItemTitle">Blog Title</h1>
                       <h1 class="blogItemContext"> Headlines Sample Text. small details about the featured blog.
                       Headlines Sample Text. small details about the featured blog.
                       </h1>
                       {/*}
                       <div class="blogItemActionContainer">
                          <button class="blogItemAction">
                            Show more
                          </button>
                       
                       </div> 
                        {*/}


                    </div>
                    
                 

                  </div>
              
                </div>
                  
             
          </div>


       </div>
     );
    }
}

export default Blogs;