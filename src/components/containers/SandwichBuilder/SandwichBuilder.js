import React, { Component, Fragment } from 'react';
import Sandwich from '../../Sandwich/Sandwich';

class SandwichBuilder extends Component{ //class-based component bo manipulujemy state.
    state = {
        ingredients: {
            bread:5,
            salad:2,
            meat:3
        }
    }
    render(){

   
        
        return(
            <Fragment>
                <Sandwich ingredients = {this.state.ingredients}/>
                <div>Controls (add lettuce etc)</div>
                
            </Fragment>
        )
    }
}
export default SandwichBuilder;
