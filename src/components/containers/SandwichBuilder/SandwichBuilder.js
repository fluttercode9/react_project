import React, { Component, Fragment } from 'react';
import Sandwich from '../../Sandwich/Sandwich';
import Controls from '../../Sandwich/SandwichIngredients/Controls/Controls';

const INGREDIENT_PRICES = {
    salad: 0.3,
    bread:1,
    meat:5

};

class SandwichBuilder extends Component{ //class-based component bo manipulujemy state.
    state = {
        ingredients: {
            bread:0,
            salad:0,
            meat:0
        },
        totalPrice:5
    }
    addIngredient = (type) => {
        const oldcount = this.state.ingredients[type];
        const updatedcount = oldcount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedcount;
        const priceAdd = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdd;
        
        this.setState({totalPrice:newPrice, ingredients:updatedIngredients});

    }
    removeIngredient = (props) => {
    }
    render(){

   
        
        return(
            <Fragment>
                <Sandwich ingredients = {this.state.ingredients}/>
                <Controls add={this.addIngredient}/>
                
            </Fragment>
        )
    }
}
export default SandwichBuilder;
