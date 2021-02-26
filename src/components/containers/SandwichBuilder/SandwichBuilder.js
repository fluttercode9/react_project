import React, { Component, Fragment } from 'react';
import Sandwich from '../../Sandwich/Sandwich';
import Controls from '../../Sandwich/SandwichIngredients/Controls/Controls';

const INGREDIENT_PRICES = {
    salad: 0.3,
    bread:1,
    meat:5,
    cheese:2

};

class SandwichBuilder extends Component{ //class-based component bo manipulujemy state.
    state = {
        ingredients: {
            bread:0,
            salad:0,
            meat:0,
            cheese:0
        },
        totalPrice:0,
        canyoubuy:false
    }
    purchaseButtonHandler (ingredients) {
        const sum = Object.values(ingredients).reduce((sum,el)=>{ return sum+el}, 0);
        this.setState({canyoubuy: sum > 0})
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
        this.purchaseButtonHandler(updatedIngredients);


    }
    removeIngredient = (type) => {
        if(this.state.ingredients[type]===0){
            alert("You can only add now:)");

        }
        else{
        const oldcount = this.state.ingredients[type];
        const updatedcount = oldcount-1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedcount;
        const priceDec = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDec;
        
        this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
        this.purchaseButtonHandler(updatedIngredients);
    }
    }
    render(){

   
        
        return(
            <Fragment>
                <Sandwich ingredients = {this.state.ingredients}/>
                <Controls canyoubuy = {this.state.canyoubuy} totalprice={this.state.totalPrice} add={this.addIngredient} rem={this.removeIngredient}/>
                
            </Fragment>
        )
    }
}
export default SandwichBuilder;
