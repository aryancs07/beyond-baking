import React , {Component} from 'react';
//import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
// get our fontawesome imports
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          dishes: DISHES
       }
    }
     
    render() {
        
        return (
        <div >
            
            <Menu dishes={this.state.dishes} />
        </div >

    );
}
}


export default App;
