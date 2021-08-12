import React from 'react'
import classes from './login.module.css'

export default function login() {
    return (
        <div>
            <a className={classes.login} href='/login'>Login</a>
        </div>
    )
}