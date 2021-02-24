import React from 'react';
import classes from './Sandwich.css';
import Ingredient from './SandwichIngredients/Ingredient';

const sandwich = (props) => {
    const transformedIngredients= Object.keys(props.ingredients).map(igKey => {

        return  [...Array(props.ingredients[igKey])].map((_,i) => {
            console.log(_,i);
            // console.log(igKey);
            // console.log("value of i :  " + i)
           return <Ingredient key = {igKey + i} type={igKey}/>
        })
    })


    return(
        <div className={classes.Sandwich}>
            {transformedIngredients}

        </div>
    );
};

export default sandwich;