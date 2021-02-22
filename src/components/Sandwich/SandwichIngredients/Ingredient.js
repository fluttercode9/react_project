import React, {Component} from 'react';
import './SandwichIngredients.css'
import PropTypes from 'prop-types';

class Ingredient extends Component{
    render() {
    let ingredient = null;

    switch (this.props.type){
        case ('bread-bottom'):
            ingredient = <div className='bread-bottom'></div>
            break;
        case ('bread-top'):
            ingredient = (
                <div className="bread-top">
                    <div className='Seeds1'></div>
                    <div className='Seeds2'></div>
                </div> );
            break;
        case ('meat'):
            ingredient = <div className='Meat'></div>;
            break;  };
    return ingredient;

};
}
Ingredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default ingredient