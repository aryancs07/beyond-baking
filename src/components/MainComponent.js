 
import React, { Component } from 'react';
import Home from './homeComponent';
import Menu from './MenuComponent';
import Contact from './contact';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { DISHES2 } from '../shared/teatime'
import { DISHES3 } from '../shared/beyondclassics';
import Login from './login';
import Register from './Register';
import { Switch, Route, Redirect } from 'react-router-dom';
import Tea from './tea';
import Beyond from './beyond';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
        dishes: DISHES,  // lifting the state up
        tea: DISHES2,
        beyond:DISHES3
        };
    }

    render() {
        const HomePage = () => {
            return(
                <Home  />
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
                        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} 
                         beyondclassics={this.state.beyondclassics}/>} />
                        <Route path="/tea" component={()=> <Tea tea={this.state.tea}/>}/>
                        <Route path="/beyond" component={()=> <Beyond beyond={this.state.beyond}/>}/>
                        
                        <Route path="/menu/:dishID" component={DishWithId} />
                        <Route exact path="/contact" component={Contact} />
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
