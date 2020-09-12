import {Component} from 'react';
import { Navbar,NavbarBrand,Container} from 'reactstrap' ;
import {
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Menu from './components/MenuComponent';
//import Example from './components/carousel'
import { DISHES } from './shared/dishes';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import React from 'react';

class Home extends Component {
  

  constructor(props) {
      super(props);
      this.state = {
          dishes: DISHES,
         // carousel: Example
         
       };
    }
    
     
    render() {
        
        return (
          <div>
            <Navbar color="danger" light expand="md">
            <NavbarBrand href="/">Beyond</NavbarBrand>
            
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="./components/MenuComponent">Menu</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="./components/contactComponent">Contact us</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    My Account
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Sign up
                    </DropdownItem>
                    
                    <DropdownItem divider />
                    <DropdownItem>
                      Sign in 
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            
            
          </Navbar>
            <div className="jumb">
            
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
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Beyond Baking</NavbarBrand>
            
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Classics</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    My Account
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Sign up
                    </DropdownItem>
                    
                    <DropdownItem divider />
                    <DropdownItem>
                      Sign in 
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            
            
          </Navbar>
        </div>
      )
          <div>
              <Menu dishes={this.state.dishes} />
          </div>
           
          </div>       
        
    );
}
}


export default Home;
