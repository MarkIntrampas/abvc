import { Component } from "react";
import './style/Blogstyle.css'; 


class Blogs extends Component{
   link = "https://whfwipusshyzvlakoejd.supabase.co/storage/v1/object/sign/media/sample.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtZWRpYS9zYW1wbGUucG5nIiwiaWF0IjoxNzQyMjc1ODc5LCJleHAiOjE3NzM4MTE4Nzl9.buURNnBln18J1WvWhuHigfdqJevMAqPFjL6s7VUznW0";
    render(){
     return(
       <div id="BlogContainer">

        

          <div id="BlogSec1">

              <img  src={this.link}  class="blogiItemImage"></img>
          </div>
            
            <div id="BlogSec2">
              <div class="item">Item 1</div>
              <div class="item">Item 2</div>
              <div class="item">Item 3</div>
              <div class="item">Item 4</div>
              <div class="item">Item 5</div>
              <div class="item">Item 6</div>
              <div class="item">Item 5</div>
              <div class="item">Item 6</div>
             
          </div>


       </div>
     );
    }
}

export default Blogs;