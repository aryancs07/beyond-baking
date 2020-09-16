import {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Main from './components/MainComponent';
// import Home from './homeComponent';
//import Example from './components/carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
//import { HOME } from './components/home';

class App extends Component {
  
    
     
    render() {
        
        return (
          <BrowserRouter>
          <div>
            
            {/* <div className="jumb">
            <div className='row row-header'>
                <div className="col-6">
                <img src="logo.jpeg" alt="logo"></img>
                </div>
              <div className="col-6">
              <Container fluid>
                <h1 className="display-3">Beyond Baking</h1>
                <p className="lead">Fusions beyond Imagination</p>
              </Container>
              </div>
              </div>
           </div>
          <div>
          
        </div> */}
      
          <div>
              <Main />
          </div>
          {/* <div>
            <Home home={this.state.home} />
          </div> */}
          
          </div>       
          </BrowserRouter>
    );
}
}


export default App;
