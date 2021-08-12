import React from 'react'
import classes from './header.module.css'
import Logo from './logo/logo'
import Button from './button/button'

export default function header() {
    return (
        <div className={classes.header}>
            <Logo />
            <Button />
        </div>
    )
}