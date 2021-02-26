import React from 'react';
import classes from './Control.css';

const control = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button  className={classes.Less} onClick={props.removed}>Less</button>
        <button  className={classes.More} onClick={props.added}>More</button>
    </div>

);

export default control;