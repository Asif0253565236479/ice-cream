import React from 'react'
import classes from './LoaddingBox.module.css'
export default function LoaddingBox() {
    return (
        <div >
           
            <i className={['fas fa-spinner fa-spin', classes.spin].join(' ')}></i>&nbsp; Loadding...
        </div>
    )
}
