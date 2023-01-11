import React, {Component} from 'react';
import Menu from './MenuComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import {DISHES} from "../shared/dishes";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from './FooterComponent';

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }
    onDishSelect(dish) {
        this.setState(
            {
                selectedDish: dish
            }
        )
    }
    render() {
        return (
            <div>
                <Header/>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dish) => {this.onDishSelect(dish)}}/>
                <DishDetail dish={this.state.selectedDish} />
                <Footer/>
            </div>
        )
    }
}

export default Main;
