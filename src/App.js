import {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Main from './components/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';

class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      authUser: null,
    };
  }
  render() {
        return (
          <BrowserRouter>
          <div>
         
         <hr/>
          <div>
              <Main />
          </div>
          
          </div>       
          </BrowserRouter>
    );
}
}


export default App;
