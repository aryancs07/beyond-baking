import React, { Component, Fragment } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg } from 'reactstrap';
import { Alert } from 'reactstrap';
import { Navbar,NavbarBrand,Badge} from 'reactstrap' ;

class Beyond extends Component {
          
      state = {
      selectedDish: null,
      count:0 ,
    
     };
 /* constructor(props) {
      super(props);
      this.handleIncrement = this.handleIncrement.bind(this);
        
  }*/
  handleIncrement = () => {
    this.setState({count: this.state.count + 1});
  };
  handleDecrement = () =>{
    if(this.state.count>0)
    this.setState({count: this.state.count - 1});
    else
     return -1;
  }
       onDishSelect(dish) {
      this.setState({ selectedDish: dish});
    }

  formatCount(){
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  };
  styles = {
    fontSize: 15,
    fontWeight: "bold"
  }
  
  render() {
    
    
      const menu3 = this.props.beyond.map((dish) => {
    
          return (
             <Fragment>    
             <div  className="col-12 col-md-5 m-1">
              <Card key={dish.id}
                onClick={() => this.onDishSelect(dish)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
              <Alert color="warning">
                    {dish.description}
                </Alert>
                </Card>
                <Media body className="ml-2">                
                    <Media heading>{dish.name}</Media>
                    <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm">-</button>
                    <span style={this.styles} className={ this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">+</button>
                      <p>
                        <h4>{dish.price}</h4>
                        
                       </p>
                   </Media>
                
                </div>
                </Fragment> 
           
          );

      });
  
      return (
        <div>
          <div className='NavMenu'>
        <Navbar dark color ="light">
        <div className="container">
        <NavbarBrand href="/"> Beyond Baking
          <div className="row col-12 col-sm-6 ">
             <div className="col-"><Badge href="/menu" color="info" >Classics</Badge></div>
             <div className="col-"><Badge href="/beyond" color="info" >Beyond Classics</Badge></div>
             <div className="col-"><Badge href="/tea" color="info" >Tea Time</Badge></div>
          </div>
          </NavbarBrand>
       </div>
        </Navbar>
        </div>
          <div className="container">
           
              <div className="row">
                  {menu3}
              </div>
             
          </div>
          </div>
      );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Beyond;