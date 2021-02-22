import React, { Component, Fragment } from 'react';

class SandwichBuilder extends Component{ //class-based component bo manipulujemy state.
    render(){
        return(
            <Fragment>
                <div>Sandwich</div>
                <div>Controls (add lettuce etc)</div>
            </Fragment>
        )
    }
}
export default SandwichBuilder;
