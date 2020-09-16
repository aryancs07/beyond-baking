 
import React, { Component } from 'react';
import Home from './homeComponent';
import Menu from './MenuComponent';
import Contact from './contactComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';

import Login from './login';
import Register from './Register';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
        dishes: DISHES,  // lifting the state up
          
        };
    }

    render() {
        const HomePage = () => {
            return(
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}    
                />
            );
          }

        const DishWithId = ({match}) => {
            return (
                // 10 -> base 10
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                    comments={this.state.comments.filter((comment) => comment.id === parseInt(match.params.dishId,10))}
                />
            );
        }  

        return (
            <div>
               
            {/* <Menu dishes={this.state.dishes}/> */}
                <Header />
               
                    <Switch> 
                        <Route path='/home' component={HomePage} />
                        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                        <Route path="/menu/:dishID" component={DishWithId} />
                        <Route exact path="/contactus" component={Contact} />
                        <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
                        <Route exact path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Redirect to="/home" />  
                    </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;

/* <Redirect to="/Home" /> this is a default path. anything dosemt match Home or Menu, 
will be returned to Home */
