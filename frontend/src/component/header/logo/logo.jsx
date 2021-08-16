import React from 'react'
import classes from './logo.module.css'
import {Link} from 'react-router-dom'

export default function logo() {
    return (
        <div>
            <Link to='/' className={classes.logo}>Amazona<i className="fab fa-amazon"></i></Link>
        </div>
    )
}