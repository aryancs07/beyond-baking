import React, { Component } from 'react';
import { Navbar, NavbarBrand,  Nav,NavItem,NavbarToggler,
    NavLink, UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,Collapse} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return(
    <React.Fragment>
      <Navbar dark expand='md fixed-top'>
        <div className="container">
        <NavbarToggler onClick={this.toggleNav} />
        <NavbarBrand className="mr-auto" href="/">
          <img src='assets/images/logo.jpeg' height="60" width="60" alt='Beyond baking' />
          </NavbarBrand>
          </div>
              <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="mr-auto" navbar>
            <NavItem>
               <NavLink className="nav-link"  to='/home' href='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to='/aboutus' href='/' ><span className="fa fa-info fa-lg"></span> About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link"  to='/menu' href='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to='/contact' href='/contact'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
            </NavItem>
           
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    My Account
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href='/login'>
                   Login
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem href='/register'>
                      Register
                    </DropdownItem>
                   
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              </Collapse>
    </Navbar>
      
    </React.Fragment>
    );
  }
}

export default Header;