import React, { Component, Fragment } from 'react';
import Sandwich from '../../Sandwich/Sandwich';

class SandwichBuilder extends Component{ //class-based component bo manipulujemy state.
    render(){
        return(
            <Fragment>
                <Sandwich/>
                <div>Controls (add lettuce etc)</div>
                
            </Fragment>
        )
    }
}
export default SandwichBuilder;
