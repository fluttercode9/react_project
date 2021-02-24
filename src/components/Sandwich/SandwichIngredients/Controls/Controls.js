
import React from 'react';
import classes from './Controls.css';
import Control from './Control/Control';

const labels = [
    {label: 'Bread', type:'bread'},
    {label:'Meat', type:'meat'}
]

const controls = (props) => (
    <div className={classes.Controls}>

        {labels.map(ctrl => {
            return <Control  key={ctrl.type} label={ctrl.label} added = {()=>props.add(ctrl.type)} />
        })}
        

    </div>

)






export default controls;