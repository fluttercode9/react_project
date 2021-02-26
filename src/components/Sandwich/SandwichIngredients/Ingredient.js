import React, {Component} from 'react';
import classes from './SandwichIngredients.css';
import PropTypes from 'prop-types';
import Bread from './bread.svg';
import Meat from './meat.svg';
import Salad from './salad.svg';
import Cheese from './cheese.svg'

class Ingredient extends Component {
    render(){
        let ingredient = null;
 
        switch(this.props.type){
            case('bread'):
                ingredient = <div >
                    <img className={classes.Ings } src={Bread} alt="bread"></img>
                </div>;
                break;
 
            case('bread-top'):
                ingredient = <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}/>
                    <div className={classes.Seeds2}/>
                </div>;
                break;
 
            case('meat'):
                ingredient = <div>
                <img className={classes.Ings} src={Meat} alt="meat"></img>
            </div>;
            break;
 
            case('cheese'):
            ingredient = <div>
            <img className={classes.Ings} src={Cheese} alt="cheese"></img>
            </div>;
            break;
 
            case('salad'):
            ingredient = <div>
            <img className={classes.Ings} src={Salad} alt="salad"></img>
            </div>;
                break;
 
            case('bacon'):
                ingredient = <div className={classes.Bacon}/>;
                break;
            default:
                ingredient=null;
        }
        return ingredient;
    }
 
}
Ingredient.propTypes = {
    type: PropTypes.string.isRequired
};
export default Ingredient;