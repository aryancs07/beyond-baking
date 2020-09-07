import React, { Component } from 'react';

import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';

class Menu extends Component {
          
      state = {
      selectedDish: null,
      count:0  
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

  renderDish(dish) {
      if (dish != null)
          return(
              <Card>
                  <CardImg top src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
          );
      else
          return(
              <div></div>
          );
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
    

      const menu = this.props.dishes.map((dish) => {
          return (
            <div  className="col-12 col-md-5 m-1">
              <Card key={dish.id}
                onClick={() => this.onDishSelect(dish)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
                </Card>
                <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm">-</button>
                <span style={this.styles} className={ this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">+</button>
                </div>
                 
          );
      });

      return (
          <div className="container">
              <div className="row">
                  {menu}
              </div>
              <div className="row">
                <div  className="col-12 col-md-5 m-1">
                  {this.renderDish(this.state.selectedDish)}
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

export default Menu;