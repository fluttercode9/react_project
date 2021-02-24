import React from 'react';
import classes from './Sandwich.css';
import Ingredient from './SandwichIngredients/Ingredient';

const sandwich = (props) => {


    let transformed = Object.keys(props.ingredients);

    transformed = transformed.map((ingredient) => {
        return [...Array(props.ingredients[ingredient])].map((_,i)=>{ return (
            <Ingredient key={ingredient+i} type={ingredient}/>
        )})
    })


     transformed = transformed.reduce((a,b)=>{
         return a.concat(b)
     }, []);



  if (transformed.length === 0) {
      return <div> <p>Make your sandwich!</p></div>
  }
  else {
        return(
            <div className={classes.Sandwich}>
             {transformed}
             </div>
             );

  }

    
};



export default sandwich;