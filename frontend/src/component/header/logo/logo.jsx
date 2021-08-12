import React from 'react'
import classes from './logo.module.css'

export default function logo() {
    return (
        <div>
            <a href='/' className={classes.logo}>Amazona<i className="fab fa-amazon"></i></a>
        </div>
    )
}