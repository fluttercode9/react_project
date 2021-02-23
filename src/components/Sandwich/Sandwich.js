import React from 'react';
import classes from './Sandwich.css';
import Ingredient from './SandwichIngredients/Ingredient';

const sandwich = (props) => {
    return(
        <div className={classes.Sandwich}>
            <Ingredient type = "bread-top"></Ingredient>
            <Ingredient type="meat"/>
            <Ingredient type = "bread-bottom"></Ingredient>
        </div>
    );
};

export default sandwich;