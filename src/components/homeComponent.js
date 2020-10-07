import React from 'react';
import { Button, Jumbotron} from 'reactstrap';


function Home(props){
  return(
    <div>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Beyond Baking</h1>
                       <p>Fusion Beyond imagination</p>
                       <div className="btnhome">
                       
                         <Button className='btncont' href="/menu">
                           Our Menu
                         </Button>
                         
                       </div>
                   </div>
               </div>
           </div>
       </Jumbotron>
    
    
      <div className='img-holder'>
      
      {/* <Button className='btn' href="/menu">Our Menu</Button> */}
      </div>
  
    </div>
  );
}

export default Home;