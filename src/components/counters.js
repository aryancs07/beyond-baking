import React, { Component } from 'react';   
import App from "./App";
class Counters extends Component {
    state = {  }
    render() { 
        return ( <div>
            <App/>
            <App/>
            <App/>
            <App/>
        </div> );
    }
}
 
export default Counters;