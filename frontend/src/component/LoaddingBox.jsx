import React from 'react'
import classes from './LoaddingBox.module.css'
export default function LoaddingBox() {
    return (
        <div className={classes.spin}>
            <i className='fas fa-star'></i> Loadding...
        </div>
    )
}
