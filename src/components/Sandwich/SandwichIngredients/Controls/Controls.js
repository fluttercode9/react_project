
import React from 'react';
import classes from './Controls.css';
import Control from './Control/Control';

const labels = [
    {label: 'Bread', type:'bread'},
    {label:'Meat', type:'meat'},
    {label:'Salad', type:'salad'},
    {label:'Cheese', type:'cheese'}
]

const controls = (props) => (
    <div className={classes.Controls}>
        
        {labels.map(ctrl => {
            return <Control
              key={ctrl.type} 
              label={ctrl.label} 
              added = {()=>props.add(ctrl.type)} 
              removed = {()=>props.rem(ctrl.type)} 
              />
        })}
        <p>{props.totalprice.toFixed(2)} zł</p>
        <button
         className={classes.OrderButton}
         disabled={!props.canyoubuy}
         >ORDER</button>

    </div>

)






export default controls;